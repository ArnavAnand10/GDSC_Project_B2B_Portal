// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa-YCSk_hI5LLfFNO4_FxDQZUqILrtcGc",
  authDomain: "b2bportal-c69e7.firebaseapp.com",
  projectId: "b2bportal-c69e7",
  storageBucket: "b2bportal-c69e7.appspot.com",
  messagingSenderId: "51223855062",
  appId: "1:51223855062:web:5ae3239b0cf3c26449ee77",
  measurementId: "G-YN6NRTY27D"
};

// Initialize Firebase
const firebaseAuth = initializeApp(firebaseConfig);
const  auth = getAuth(firebaseAuth)

export default auth;