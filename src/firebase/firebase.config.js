// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ4AeCIdLQF6tNQlF091LD9OFULXK8jfU",
  authDomain: "nextauth-394201.firebaseapp.com",
  projectId: "nextauth-394201",
  storageBucket: "nextauth-394201.appspot.com",
  messagingSenderId: "643226506243",
  appId: "1:643226506243:web:0d4cd1db36f4218507ea36",
  measurementId: "G-7WPFT9BR6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
