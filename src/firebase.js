// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1zIkUcq_vN0fQr7IvllD78x3lT05KdYs",
  authDomain: "userlogin-e36ce.firebaseapp.com",
  projectId: "userlogin-e36ce",
  storageBucket: "userlogin-e36ce.appspot.com",
  messagingSenderId: "943770871286",
  appId: "1:943770871286:web:4846e4db5d8e42d9c053d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);