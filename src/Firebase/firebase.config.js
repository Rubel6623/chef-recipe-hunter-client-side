// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ2TDiQRs03FdQoCheHpqyKy3eWB-_BhY",
  authDomain: "chef-recipe-hunter-f9c52.firebaseapp.com",
  projectId: "chef-recipe-hunter-f9c52",
  storageBucket: "chef-recipe-hunter-f9c52.appspot.com",
  messagingSenderId: "112434417464",
  appId: "1:112434417464:web:d505f755137c4856c17bcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;