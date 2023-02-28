// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId

  apiKey: "AIzaSyDVNiwBrOqrekfThExT6hn0AJ14PJ7DWsw",
  authDomain: "courses-bd-bac7b.firebaseapp.com",
  projectId: "courses-bd-bac7b",
  storageBucket: "courses-bd-bac7b.appspot.com",
  messagingSenderId: "143732681284",
  appId: "1:143732681284:web:baa579f140038977cdaa11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;