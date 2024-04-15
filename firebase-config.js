// Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDHGolLRViw6-ycm_QoABHBpIqU_K6Cfjo",
    authDomain: "loginpark.firebaseapp.com",
    projectId: "loginpark",
    storageBucket: "loginpark.appspot.com",
    messagingSenderId: "352737059141",
    appId: "1:352737059141:web:dcefda3bde44bfc9199e2c",
    measurementId: "G-5164D04QBD"
  };

  // Inicializa tu aplicación Firebase
const app = initializeApp(firebaseConfig);

export default app;