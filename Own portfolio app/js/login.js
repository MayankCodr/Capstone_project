import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChqr4FikTuHmF5XXa4I7uNKoP_RZDEhXw",
    authDomain: "mt-group-ebb26.firebaseapp.com",
    databaseURL: "https://mt-group-ebb26-default-rtdb.firebaseio.com",
    projectId: "mt-group-ebb26",
    storageBucket: "mt-group-ebb26.appspot.com",
    messagingSenderId: "91239097526",
    appId: "1:91239097526:web:09bcfe331a04cc0e63f217"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

 

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      var email = document.getElementById("email").value;
      localStorage.setItem("email", email);
      window.location.replace("main.html");
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  