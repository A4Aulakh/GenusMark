
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJKGZyFb7DTvixAlpxz1iguk_Eq9Z6uR4",
  authDomain: "olx-clone-f1774.firebaseapp.com",
  projectId: "olx-clone-f1774",
  storageBucket: "olx-clone-f1774.appspot.com",
  messagingSenderId: "160223701424",
  appId: "1:160223701424:web:63d0b568f7d00468a80e75",
  measurementId: "G-9290P997GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);