// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVNt_jLU7aOjzfTkalcVt41_6_MYnjkYA",
  authDomain: "alpha-884cc.firebaseapp.com",
  projectId: "alpha-884cc",
  storageBucket: "alpha-884cc.appspot.com",
  messagingSenderId: "916956059434",
  appId: "1:916956059434:web:c2373c92a5e34ce3073053",
  measurementId: "G-2VVQ4NGGLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);