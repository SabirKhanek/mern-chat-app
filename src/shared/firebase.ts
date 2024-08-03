// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbt5zJS0z3HL_SaR3o0hFZQwIJpSrPX-A",
  authDomain: "signtalk-gcu.firebaseapp.com",
  projectId: "signtalk-gcu",
  storageBucket: "signtalk-gcu.appspot.com",
  messagingSenderId: "698099766711",
  appId: "1:698099766711:web:7867720ee6411bd2c30432",
  measurementId: "G-06E5X2JQJP",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
