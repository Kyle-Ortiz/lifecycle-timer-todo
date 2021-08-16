import firebase from "firebase";


const firebaseConfig = {
     apiKey: "AIzaSyBrE3RzjhmcY5v6PekqpZr5Dx4w8fNtPF0",
     authDomain: "life-cycle-productivity.firebaseapp.com",
     projectId: "life-cycle-productivity",
     storageBucket: "life-cycle-productivity.appspot.com",
     messagingSenderId: "451815918063",
     appId: "1:451815918063:web:e1df63fcbaf86ee3188e1a",
     measurementId: "G-SGQT7J3Z99"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();

   export default firebase;