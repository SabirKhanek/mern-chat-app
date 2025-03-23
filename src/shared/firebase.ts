// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDbt5zJS0z3HL_SaR3o0hFZQwIJpSrPX-A",
//   authDomain: "signtalk-gcu.firebaseapp.com",
//   projectId: "signtalk-gcu",
//   storageBucket: "signtalk-gcu.appspot.com",
//   messagingSenderId: "698099766711",
//   appId: "1:698099766711:web:7867720ee6411bd2c30432",
//   measurementId: "G-06E5X2JQJP",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCIXfrF4VmcduOHti8C9TpCu3Hq2wfivSo",
  authDomain: "signtalk-umt.firebaseapp.com",
  projectId: "signtalk-umt",
  storageBucket: "signtalk-umt.firebasestorage.app",
  messagingSenderId: "446082520506",
  appId: "1:446082520506:web:0f82a4093844a8c816f983",
  measurementId: "G-J4W959MBV1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
