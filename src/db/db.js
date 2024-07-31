import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJv0eymBVdzMRhuRQcRElaUq2y74ZWmQE",
  authDomain: "ecommerce-8818f.firebaseapp.com",
  projectId: "ecommerce-8818f",
  storageBucket: "ecommerce-8818f.appspot.com",
  messagingSenderId: "350730203290",
  appId: "1:350730203290:web:ff183e54be1ed7e6b6ef23"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db;