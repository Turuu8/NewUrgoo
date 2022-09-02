import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuKBu0F21lnnSS8c2ZIXBkgcJnSaX3R2w",
    authDomain: "hello-8a624.firebaseapp.com",
    projectId: "hello-8a624",
    storageBucket: "hello-8a624.appspot.com",
    messagingSenderId: "279759294231",
    appId: "1:279759294231:web:815f8042b2ba0981fcf152",
    measurementId: "G-NK0GXBJMJH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)