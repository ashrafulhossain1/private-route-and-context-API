// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyJm047Y9z0I_YvnhlmoeQEm0OAakllb4",
  authDomain: "private-route-and-context-api.firebaseapp.com",
  projectId: "private-route-and-context-api",
  storageBucket: "private-route-and-context-api.firebasestorage.app",
  messagingSenderId: "409137781252",
  appId: "1:409137781252:web:17605377a8317ac95fb351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)