// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8It1pDXLf_gBllafnJyW-3wFmvLoh_6I",
  authDomain: "counter-app-eb3d7.firebaseapp.com",
  projectId: "counter-app-eb3d7",
  storageBucket: "counter-app-eb3d7.appspot.com",
  messagingSenderId: "818913676904",
  appId: "1:818913676904:web:a346dcc938b33b05ffb5dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;