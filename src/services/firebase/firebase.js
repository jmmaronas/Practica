import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROYECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_SOTRAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClzmqhuk5kv4nrrnNnNywLigCkkiT-hmA",
//   authDomain: "comision-58390.firebaseapp.com",
//   projectId: "comision-58390",
//   storageBucket: "comision-58390.appspot.com",
//   messagingSenderId: "291051197452",
//   appId: "1:291051197452:web:902a8ce702e64df35d8a29"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app)