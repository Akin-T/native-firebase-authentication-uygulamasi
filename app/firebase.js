// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAzRkIoSM8Q_A2sRjrerMyHsp586m2fTY",
  authDomain: "login-87478.firebaseapp.com",
  projectId: "login-87478",
  storageBucket: "login-87478.appspot.com",
  messagingSenderId: "892617365651",
  appId: "1:892617365651:web:94a5ab9c74aeb9924dd566",
};

// Initialize Firebase
if (!firebase.apps.length) {
  const app = initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export { auth };
