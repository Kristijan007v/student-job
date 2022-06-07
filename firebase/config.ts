import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzqf0HwPbXHi4ZcacNAOP_iR4A4RLnOiI",
  authDomain: "student-job-35dc3.firebaseapp.com",
  projectId: "student-job-35dc3",
  storageBucket: "student-job-35dc3.appspot.com",
  messagingSenderId: "834130597839",
  appId: "1:834130597839:web:33804cfa279eb5116024ba",
  measurementId: "G-WRVNM1Q5R8",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;
