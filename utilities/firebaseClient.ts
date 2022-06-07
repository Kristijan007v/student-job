import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzqf0HwPbXHi4ZcacNAOP_iR4A4RLnOiI",
  authDomain: "localhost",
  projectId: "student-job-35dc3",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;
