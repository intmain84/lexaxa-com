import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { storage } from './firebase' //Import from your Firebase initialization file

export async function uploadFile(file: File) {
  const storageRef = ref(storage, `projects/${file.name}`) // Creates a reference to the file in your bucket
  try {
    await uploadBytes(storageRef, file) // Uploads the file to the bucket

    const path = await getDownloadURL(ref(storage, `projects/${file.name}`))

    return path
  } catch (error) {
    throw error
  }
}

export async function deleteFile(fileName: string) {
  const storageRef = ref(storage, `projects/${fileName}`)
  try {
    await deleteObject(storageRef)
  } catch (error) {
    throw error
  }
}
