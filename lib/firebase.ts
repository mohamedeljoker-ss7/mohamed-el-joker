import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3XRTBWSV46_dBJoJE5HDS-sUo_UaU4as",
  authDomain: "mohamed-el-joker.firebaseapp.com",
  projectId: "mohamed-el-joker",
  storageBucket: "mohamed-el-joker.firebasestorage.app",
  messagingSenderId: "402384603429",
  appId: "1:402384603429:web:0e5ff5b44cf1ba066ab2cc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
