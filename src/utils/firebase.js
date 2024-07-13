// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtZbp6MEWXTkM7UbMpiOuwLBKqUEyJqw8",
  authDomain: "ecommerce-2d566.firebaseapp.com",
  projectId: "ecommerce-2d566",
  storageBucket: "ecommerce-2d566.appspot.com",
  messagingSenderId: "57232388993",
  appId: "1:57232388993:web:cfb97301d61e29e6622e80",
  measurementId: "G-KRQ3CBNT4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);