// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcHWvUENAolfdl0264ad4pbruraagRQ6k",
  authDomain: "aula07-652e7.firebaseapp.com",
  projectId: "aula07-652e7",
  storageBucket: "aula07-652e7.appspot.com",
  messagingSenderId: "555645043318",
  appId: "1:555645043318:web:2752098d21be7e34d61557",
  measurementId: "G-88RPV9HB9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = initializeApp(firebaseConfig)
export default firebaseApp;
