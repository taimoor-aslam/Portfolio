import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB6512qmwcvDdLqrmt9HeYVtTx5yhcT1M",
  authDomain: "taimoor-portfolio.firebaseapp.com",
  projectId: "taimoor-portfolio",
  storageBucket: "taimoor-portfolio.appspot.com",
  messagingSenderId: "501557417917",
  appId: "1:501557417917:web:0bbd75a97e32009c6464d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
