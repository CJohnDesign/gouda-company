import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBESSIfnnHcChqLnEPGGRdYuQBAx_kGTjs",
  authDomain: "gouda-company.firebaseapp.com",
  projectId: "gouda-company",
  storageBucket: "gouda-company.appspot.com",
  messagingSenderId: "694200444660",
  appId: "1:694200444660:web:f9ef01bfda90fc63a6a0a1",
  measurementId: "G-1L66RSFLQ7"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };

