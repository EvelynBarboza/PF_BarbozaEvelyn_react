import {initializeApp} from "firebase/app"
import {getFirestone} from 'firebase/firestone'

const firebaseConfig = {
    apiKey: "AIzaSyDutETSyjZbEgUzwo0lWbZ5QHa3xe1fxTs",
    authDomain: "ecommerce-ananda.firebaseapp.com",
    projectId: "ecommerce-ananda",
    storageBucket: "ecommerce-ananda.appspot.com",
    messagingSenderId: "20143494698",
    appId: "1:20143494698:web:fef81ed1c0f4ccf7e0d553"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  export const db = getFirestone(app)