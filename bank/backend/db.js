// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANsxboH5b3jFBvTE8vj4D0M0woD02jS0U",
  authDomain: "web-project-cae3b.firebaseapp.com",
  projectId: "web-project-cae3b",
  storageBucket: "web-project-cae3b.appspot.com",
  messagingSenderId: "916983941213",
  appId: "1:916983941213:web:91f85aa3a0ef5ce01265b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;