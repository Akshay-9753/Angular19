// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  firebaseConfig: {
  apiKey: "AIzaSyC2YZ2p-RYhAfvyKxA7SfRs9oGgmz2IiWI",
  authDomain: "portfolio-52599.firebaseapp.com",
  databaseURL: "https://portfolio-52599-default-rtdb.firebaseio.com",
  projectId: "portfolio-52599",
  storageBucket: "portfolio-52599.firebasestorage.app",
  messagingSenderId: "803208020282",
  appId: "1:803208020282:web:60c54e41d863cc591b9003",
  measurementId: "G-9FZWXWJK1D"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);