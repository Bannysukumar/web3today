import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm2jxPbuJ13NICqOgqgxMBwjYltaFAfQ4",
  authDomain: "web3agency-3a51a.firebaseapp.com",
  projectId: "web3agency-3a51a",
  storageBucket: "web3agency-3a51a.firebasestorage.app",
  messagingSenderId: "215731633910",
  appId: "1:215731633910:web:c39899f1e7b0ebc5c436d7",
  measurementId: "G-S41WT52W7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and Firestore
let analytics;
if (typeof window !== 'undefined') {
  // Only initialize analytics on the client side
  analytics = getAnalytics(app);
}
export const db = getFirestore(app);

export { analytics }; 