// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCdlPJPpPfOnM4Pal5ddmDbSRklc3q2iWQ",
  authDomain: "todo-396d8.firebaseapp.com",
  databaseURL: "https://todo-396d8.firebaseio.com",
  projectId: "todo-396d8",
  storageBucket: "todo-396d8.appspot.com",
  messagingSenderId: "166695203920",
  appId: "1:166695203920:web:77b8e22c3a39f987174d55",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// const db = firebase.firestore();

// export default db;
export default firebase;
// // Import the functions you need from the SDKs you need
//  import { firebase  } from "firebase/app";
// //import { initializeApp } from "firebase/app";

// import "firebase/firestore";
// import "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCdlPJPpPfOnM4Pal5ddmDbSRklc3q2iWQ",
//   authDomain: "todo-396d8.firebaseapp.com",
//   databaseURL: "",
//   projectId: "todo-396d8",
//   storageBucket: "todo-396d8.appspot.com",
//   messagingSenderId: "166695203920",
//   appId: "1:166695203920:web:77b8e22c3a39f987174d55",
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);
//  firebase.initializeApp(firebaseConfig);
// firebase.firestore();
//  export default firebase;
