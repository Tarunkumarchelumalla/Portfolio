import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANwpO9ciQl6YRI0RAzKsXxfR6W4Cl-qEs",
  authDomain: "authh-6b332.firebaseapp.com",
  databaseURL: "https://authh-6b332.firebaseio.com",
  projectId: "authh-6b332",
  storageBucket: "authh-6b332.appspot.com",
  messagingSenderId: "685670760882",
  appId: "1:685670760882:web:c1f2cc80b15e28969724ab",
  measurementId: "G-VJD0MK730W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);