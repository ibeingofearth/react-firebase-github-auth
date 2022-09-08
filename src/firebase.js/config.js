import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA--QJcu8A6xXIL9uoAUg42Bzys2HeDO2E",
  authDomain: "react-app-firebase-github-auth.firebaseapp.com",
  projectId: "react-app-firebase-github-auth",
  storageBucket: "react-app-firebase-github-auth.appspot.com",
  messagingSenderId: "394327560037",
  appId: "1:394327560037:web:2aa54695eda3d90ed6db8c"
};


// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth();

export { auth };