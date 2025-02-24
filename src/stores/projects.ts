import { ref } from 'vue'
import { defineStore } from 'pinia'
import { limit, getDocs, query, where, collection } from 'firebase/firestore'
import { db } from '@/lib/firebase'

type ContentItem = {
  order: number
  type: string
  value: string
}

type Project = {
  createdAt: string
  id: string
  title: string
  slug: string
  link: string
  image: string
  tags: string[]
  content: ContentItem[]
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([])
  const project = ref<Project>({
    createdAt: '',
    id: '',
    title: '',
    slug: '',
    link: '',
    image: '',
    tags: [],
    content: [],
  })

  //Getters
  // const doubleCount = computed(() => count.value * 2)

  //Actions
  //Get all projects
  async function getAllProjects() {
    const querySnapshot = await getDocs(collection(db, 'projects'))
    const projectsCollection: Project[] = []
    querySnapshot.forEach((doc) => {
      const projectData = doc.data() as Omit<Project, 'id'>
      projectsCollection.push({ id: doc.id, ...projectData })
    })
    projects.value = projectsCollection
  }

  //Get a project
  async function getAProject(link: string) {
    try {
      const projectsRef = collection(db, 'projects')
      const q = query(projectsRef, where('link', '==', link), limit(1))

      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0]
        const projectData = doc.data() as Omit<Project, 'id'>
        project.value = { id: doc.id, ...projectData }
      } else {
        throw new Error('Project not found')
      }
    } catch (error) {
      throw error
    }
  }

  return { projects, project, getAllProjects, getAProject }
})
