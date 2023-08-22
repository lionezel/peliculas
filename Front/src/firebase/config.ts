// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqvw3OljdlVSSXKg0Vpw1F2YfHRs3aEcI",
  authDomain: "movie-angular-88773.firebaseapp.com",
  projectId: "movie-angular-88773",
  storageBucket: "movie-angular-88773.appspot.com",
  messagingSenderId: "3570144004",
  appId: "1:3570144004:web:e1010c04f909013e80f651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app