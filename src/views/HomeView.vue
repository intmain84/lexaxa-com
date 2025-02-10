<script lang="ts" setup>
import HomeHero from '@/components/home-hero/HomeHero.vue'

const projects = [
  {
    id: 1,
    title: "Bob\'s Bookkeepers. Bookkeeping Services",
    image:
      'https://cdn.prod.website-files.com/6690c492aec74652c32bdcf2/6731d223a2c282a3e90344be_tim-mossholder-G2dCiAnjQRc-unsplash.jpg',
    tags: ['Design', 'Webflow'],
    link: 'bobs-bookkeepers-bookkeeping-services',
  },
  {
    id: 2,
    title: 'GlassArt. Handmade Glass Decor & Accessories',
    image:
      'https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2025/01/67877ecfc8a61541865875.jpg',
    tags: ['React.js'],
    link: 'glassart-handmade-glass-decor-accessories',
  },
  {
    id: 3,
    title: 'ShopSync. Shopify & QuickBooks Integration',
    image:
      'https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2025/01/6779aac9e06a7404831331.png',
    tags: ['Vue.js'],
    link: 'hopsync-shopify-quickbooks-integration',
  },
  {
    id: 4,
    title: 'SportFind. Sports Facility Booking & Search',
    image:
      'https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2025/01/6787f4e131cfe517137705.png',
    tags: ['Design', 'Next.js'],
    link: 'sportfind-sports-facility-booking-search',
  },
]
</script>

<template>
  <main class="xl:mx-auto xl:max-w-[109rem]">
    <!-- Hero -->
    <HomeHero />

    <!-- Projects -->
    <div class="w-full grid grid-cols-3 gap-12">
      <RouterLink
        :to="`/projects/${project.link}`"
        v-for="project in projects"
        :key="project.id"
        class="flex flex-col gap-2"
      >
        <img :src="project.image" alt="" class="aspect-video object-cover" />
        <h3 class="font-[600] mt-2">{{ project.title }}</h3>
        <div
          class="uppercase before:content-['{'] after:content-['}'] tracking-wide font-[300] flex-inline space-x-6 text-mint"
        >
          <span v-for="tag in project.tags" :key="tag" class="ml-2 mr-2">{{ tag }}</span>
        </div>
      </RouterLink>
    </div>
  </main>
</template>
