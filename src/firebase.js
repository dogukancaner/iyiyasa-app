import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfLyHfwA02A-cHHKOAo0kRq3nOTR3thMg",
  authDomain: "iyiyasa-app-e927d.firebaseapp.com",
  projectId: "iyiyasa-app-e927d",
  storageBucket: "iyiyasa-app-e927d.appspot.com",
  messagingSenderId: "835939364044",
  appId: "1:835939364044:web:5fbd96953c77505fe1e669",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
