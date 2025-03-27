export interface ContentItem {
  order: number
  type: string
  value: string
}

export interface Project {
  createdAt: string
  id: string
  title: string
  link: string
  image: string
  caption: string
  tags: string[]
  live: string
  github: string
  figma: string
  content: ContentItem[]
}

export interface ContentBlock {
  order: number
  type: string
  value: string
}

export interface Images {
  id: number
  name: string
}
