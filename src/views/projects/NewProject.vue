<script lang="ts" setup>
import { ref } from 'vue'
import { CoText, BsImageFill, AnOutlinedDelete } from '@kalimahapps/vue-icons'
import TheButton from '@/components/TheButton.vue'

interface ContentBlock {
  order: number
  type: 'paragraph' | 'image'
  value: string
}

const title = ref<string>('')
const formData = ref<ContentBlock[]>([])

const addBlock = (type: string): void => {
  formData.value.push({
    order: formData.value.length + 1,
    type,
    value: '',
  })
}

const deleteBlock = (index: number): void => {
  formData.value.splice(index, 1)
}
</script>

<template>
  <div class="container-narrow mt-20">
    <form @submit.prevent>
      <!-- Title -->
      <div class="form-group">
        <input
          type="text"
          id="name"
          placeholder="Project title..."
          v-model="title"
          class="font-headers uppercase text-[6rem] mb-10 font-bold w-full focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out"
        />
      </div>

      <!-- Place for new inputs -->
      <div v-if="formData.length !== 0">
        <div class="flex gap-4 mb-10" v-for="(block, index) in formData" :key="block.order">
          <input
            type="text"
            :id="block.order + index"
            placeholder="Your text..."
            v-model="formData[index].value"
            class="w-full focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out"
            v-if="block.type === 'paragraph'"
          />
          <input
            type="file"
            :id="block.order + index"
            :name="block.order + index"
            accept="image/png, image/jpeg"
            v-else-if="block.type === 'image'"
          />
          <AnOutlinedDelete
            class="p-3 h-10 w-10 bg-obsidian-light text-mint cursor-pointer hover:bg-mint hover:text-obsidian transition-all duration-500 ease-in-out"
            @click.stop="deleteBlock(index)"
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
      <TheButton class="mt-10">Save</TheButton>
    </form>
  </div>
</template>
