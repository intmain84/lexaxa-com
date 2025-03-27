<script lang="ts" setup>
import { ref } from 'vue'
import { CoText, BsImageFill, AnOutlinedDelete, CdLoading } from '@kalimahapps/vue-icons'

import TheButton from '@/components/TheButton.vue'
import { uploadFile, deleteFile } from '@/lib/storage'
import { useProjectsStore } from '@/stores/projects'
import { useRouter } from 'vue-router'
import type { ContentBlock, Images } from '@/types'

const projectsStore = useProjectsStore()
const router = useRouter()

const title = ref<string>('')
const mainImage = ref<string>('')
const tags = ref<string>('')
const live = ref<string>('')
const github = ref<string>('')
const figma = ref<string>('')
const caption = ref<string>('')

//Images
const images = ref<Images[]>([])
const imageUploadError = ref<string>('')
const isPending = ref<boolean>(false)

//Content blocks data
const content = ref<ContentBlock[]>([])

const addBlock = (type: string): void => {
  content.value.push({
    order: content.value.length + 1,
    type,
    value: '',
  })
}

const deleteBlock = async (index: number) => {
  const foundFile = images.value.find((file) => file.id == index)
  const fileName = foundFile ? foundFile.name : null

  try {
    if (fileName) {
      await deleteFile(fileName) // Delete image from db
      content.value.splice(index, 1) // Delete block from the page
    } else {
      console.log('File not found in images')
    }
  } catch (error) {
    console.log(error)
  }
}

const getFile = async (event: Event, index: number | null = null) => {
  const input = event.target as HTMLInputElement
  try {
    isPending.value = true
    if (input.files && input.files.length > 0) {
      const image = input.files[0]
      if (index !== null) {
        console.log('Image true')
        images.value.push({ id: index, name: image.name })
        const path = await uploadFile(input.files[0])
        content.value[index].value = path
      } else {
        console.log('Image false')
        const path = await uploadFile(input.files[0])
        mainImage.value = path
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      imageUploadError.value = error.message
    } else {
      imageUploadError.value = 'Unknown error'
    }
  } finally {
    isPending.value = false
  }
}

const submitForm = async () => {
  const tagsArray = tags.value.split(',').map((tag) => tag.trim())
  const link = title.value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()
  const formData = {
    title: title.value,
    image: mainImage.value,
    caption: caption.value,
    link,
    tags: tagsArray,
    live: live.value,
    github: github.value,
    figma: figma.value,
    content: JSON.parse(JSON.stringify(content.value)),
  }
  try {
    await projectsStore.postProject(formData)
    router.push({ name: 'projects' })
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <div class="relative container-narrow my-20">
    <div
      v-if="isPending"
      class="absolute flex justify-center w-full h-full bg-obsidian opacity-100"
    >
      <CdLoading class="animate-spin text-6xl text-mint" />
    </div>
    <form @submit.prevent="submitForm">
      <!-- Title -->
      <div class="form-group">
        <textarea
          type="text"
          id="name"
          placeholder="Project title..."
          v-model="title"
          class="font-headers uppercase text-[6rem] mb-10 font-bold w-full focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out field-sizing-content resize-none"
        />
      </div>

      <!-- Tags -->
      <div class="flex gap-4 mb-10 items-start">
        <input
          type="text"
          id="tags"
          placeholder="Tags separated with comma..."
          v-model="tags"
          class="w-full min-h-[40px] focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out field-sizing-content resize-none"
        />
      </div>

      <!-- Live -->
      <div class="flex gap-4 mb-10 items-start">
        <input
          type="text"
          id="live"
          placeholder="Live link (http://...)"
          v-model="live"
          class="w-full min-h-[40px] focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out field-sizing-content resize-none"
        />
      </div>

      <!-- Github -->
      <div class="flex gap-4 mb-10 items-start">
        <input
          type="text"
          id="github"
          placeholder="Github link (http://...)"
          v-model="github"
          class="w-full min-h-[40px] focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out field-sizing-content resize-none"
        />
      </div>
      <!-- Github -->
      <div class="flex gap-4 mb-10 items-start">
        <input
          type="text"
          id="figma"
          placeholder="Figma link (http://...)"
          v-model="figma"
          class="w-full min-h-[40px] focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out field-sizing-content resize-none"
        />
      </div>

      <!-- Main image -->
      <div class="w-full mb-10">
        <label
          for="main-image"
          class="block text-center w-full p-2 border cursor-pointer border-dashed border-obsidian-light hover:text-mint hover:border-mint transition-all duration-500 ease-in-out"
        >
          <span v-if="mainImage.length === 0">Upload main image</span>
          <img
            :src="mainImage"
            class="place-self-center w-full mb-8 aspect-video object-cover"
            v-else
          />
        </label>
        <input
          type="file"
          id="main-image"
          name="main-image"
          accept="image/avif"
          class="hidden"
          v-on:change="(event: Event) => getFile(event)"
        />
      </div>
      <!-- Caption -->
      <div class="flex gap-4 mb-10 items-start">
        <input
          type="text"
          id="caption"
          placeholder="Caption"
          v-model="caption"
          class="w-full min-h-[40px] focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out field-sizing-content resize-none"
        />
      </div>

      <!-- Place for new inputs -->
      <div v-if="content.length !== 0">
        <div
          class="flex gap-4 mb-10 items-start"
          v-for="(block, index) in content"
          :key="block.order"
        >
          <textarea
            type="text"
            :id="`text-${block.order}-${index}`"
            placeholder="Your text..."
            v-model="content[index].value"
            class="w-full min-h-[40px] focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out field-sizing-content resize-none"
            v-if="block.type === 'paragraph'"
          />
          <div v-else-if="block.type === 'image'" class="w-full">
            <label
              :for="`file-${block.order}-${index}`"
              class="block text-center w-full p-2 border cursor-pointer border-dashed border-obsidian-light hover:text-mint hover:border-mint transition-all duration-500 ease-in-out"
            >
              <span v-if="images[index]?.id !== index">Upload image</span>
              <img :src="block.value" class="max-w-80 place-self-center" v-else />
            </label>
            <input
              type="file"
              :id="`file-${block.order}-${index}`"
              :name="`file-${block.order}-${index}`"
              accept="image/avif"
              class="hidden"
              v-on:change="(event: Event) => getFile(event, index)"
            />
          </div>
          <AnOutlinedDelete
            class="p-3 h-10 w-10 bg-obsidian-light text-mint cursor-pointer hover:bg-mint hover:text-obsidian transition-all duration-500 ease-in-out"
            @click.stop="deleteBlock(index)"
            v-if="!isPending"
          />
        </div>
      </div>

      <!-- Buttons -->
      <div class="relative flex justify-start" id="controls">
        <div class="flex gap-[1px] items-center bg-obsidian">
          <CoText
            class="p-3 h-10 w-10 bg-obsidian-light text-mint cursor-pointer hover:bg-mint hover:text-obsidian transition-all duration-500 ease-in-out"
            @click.stop="addBlock('paragraph')"
          />
          <BsImageFill
            class="p-3 h-10 w-10 bg-obsidian-light text-mint cursor-pointer hover:bg-mint hover:text-obsidian transition-all duration-500 ease-in-out"
            @click.stop="addBlock('image')"
          />
        </div>
      </div>
      <TheButton class="mt-10" v-if="!isPending">Save</TheButton>
    </form>
  </div>
</template>
