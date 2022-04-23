import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB3JM8euwctVgxRvSA05e2TloWjz5ivd8E",
    authDomain: "coderhouse-faa1a.firebaseapp.com",
    projectId: "coderhouse-faa1a",
    storageBucket: "coderhouse-faa1a.appspot.com",
    messagingSenderId: "891137745234",
    appId: "1:891137745234:web:0bc95ed2d36f048f359a8b"
    };

const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);