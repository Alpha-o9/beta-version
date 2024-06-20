// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBT6AyU6G_PRiOtgWmEPwfTbfFG_UQD1c",
  authDomain: "linkedin-4852c.firebaseapp.com",
  projectId: "linkedin-4852c",
  storageBucket: "linkedin-4852c.appspot.com",
  messagingSenderId: "277190884928",
  appId: "1:277190884928:web:b3e98e67458be98114a9a5",
  measurementId: "G-JM6ZXVBSJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);