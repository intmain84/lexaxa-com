import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  limit,
  getDocs,
  addDoc,
  query,
  where,
  collection,
  serverTimestamp,
  orderBy,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { Project } from '@/types'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([])
  const project = ref<Project>({
    createdAt: '',
    id: '',
    title: '',
    link: '',
    image: '',
    caption: '',
    tags: [],
    live: '',
    github: '',
    figma: '',
    content: [],
  })

  //Getters
  // const doubleCount = computed(() => count.value * 2)

  //Actions
  //Get all projects
  async function getAllProjects() {
    const projectsCollection: Project[] = []

    // Запрос с сортировкой по createdAt (новые проекты первыми)
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      const projectData = doc.data() as Omit<Project, 'id'>
      projectsCollection.push({ id: doc.id, ...projectData })
    })

    projects.value = projectsCollection
  }

  // const q = query(projectsRef, orderBy("name"), limit(3));

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

  async function postProject(project: Omit<Project, 'id'>) {
    try {
      const data = { ...project, createdAt: serverTimestamp() }
      console.log(data)

      // Add a new document with a generated id.
      await addDoc(collection(db, 'projects'), data)
    } catch (error) {
      console.log('Error posting project: ', error)
    }
  }

  return { projects, project, getAllProjects, getAProject, postProject }
})
