import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import data from "./env.json"

const firebaseConfig = {
  apiKey: data.main.REACT_APP_FIREBASE_API_KEY,
  authDomain: data.main.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: data.main.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: data.main.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: data.main.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: data.main.REACT_APP_FIREBASE_APP_ID,
  measurementId: data.main.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);