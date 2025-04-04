// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config/config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
