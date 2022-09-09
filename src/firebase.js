// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiNxVhGCvwIcteNrb60oCxSvmfdIpdZA8",
  authDomain: "auth-dev-wds.firebaseapp.com",
  projectId: "auth-dev-wds",
  storageBucket: "auth-dev-wds.appspot.com",
  messagingSenderId: "577211128345",
  appId: "1:577211128345:web:1d25a41109cf59666ea888",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
