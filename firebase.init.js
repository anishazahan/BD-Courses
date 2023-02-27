
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCq8BPJduIsPsShZb9aENkYVdfr-Iae9qA",
  authDomain: "courses-bd-53b9d.firebaseapp.com",
  projectId: "courses-bd-53b9d",
  storageBucket: "courses-bd-53b9d.appspot.com",
  messagingSenderId: "832252870881",
  appId: "1:832252870881:web:5b41870a0bbdc774c337a0",
  measurementId: "G-024JXMV6JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);