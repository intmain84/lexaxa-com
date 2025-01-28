import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB7LfwxN-3Nfn-DnC3nqA4F8WjTCWiOvug',
  authDomain: 'portfolio-e6c69.firebaseapp.com',
  projectId: 'portfolio-e6c69',
  storageBucket: 'portfolio-e6c69.firebasestorage.app',
  messagingSenderId: '737396264718',
  appId: '1:737396264718:web:1a60199ec6d725a109115f',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
