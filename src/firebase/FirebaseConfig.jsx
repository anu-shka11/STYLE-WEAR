
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfFaQdGOud-Ybh5n9qfzZZxNX4vZWWWv8",
  authDomain: "myecom-ba58f.firebaseapp.com",
  projectId: "myecom-ba58f",
  storageBucket: "myecom-ba58f.appspot.com",
  messagingSenderId: "146348653442",
  appId: "1:146348653442:web:fd148bd6c38bd0bac86d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }