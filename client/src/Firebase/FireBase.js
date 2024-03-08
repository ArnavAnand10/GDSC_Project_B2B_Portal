// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVmhQaKUbw5deu5cH5VZ41TNyBt5O0kmQ",
  authDomain: "b2bportal-6cbb6.firebaseapp.com",
  projectId: "b2bportal-6cbb6",
  storageBucket: "b2bportal-6cbb6.appspot.com",
  messagingSenderId: "887488702575",
  appId: "1:887488702575:web:ada02e7a38c8e46f46459a",
  measurementId: "G-W3HM7MBBYV"
};

// Initialize Firebase
const firebaseAuth = initializeApp(firebaseConfig);
const  auth = getAuth(firebaseAuth)

export default auth;