// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADO5dcTvsPOirw8_yF1pt3AWH6MNQRAPc",
  authDomain: "contact-app-b2818.firebaseapp.com",
  projectId: "contact-app-b2818",
  storageBucket: "contact-app-b2818.appspot.com",
  messagingSenderId: "801338217291",
  appId: "1:801338217291:web:cac8310f456631ee618ece"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);