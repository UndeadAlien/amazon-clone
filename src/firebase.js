import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHZZIZf_Z_DA7d0mreiNx5EOWr4yvHs0A",
  authDomain: "clone-9b887.firebaseapp.com",
  databaseURL: "https://clone-9b887.firebaseio.com",
  projectId: "clone-9b887",
  storageBucket: "clone-9b887.appspot.com",
  messagingSenderId: "618393227098",
  appId: "1:618393227098:web:4a0723cf6c1562882ded63",
  measurementId: "G-YGE24N0189"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };