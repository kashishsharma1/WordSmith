
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBurWifNKLsXSU9xi1uYC60YD3dVFeptro",
  authDomain: "login-8855a.firebaseapp.com",
  databaseURL: "https://login-8855a-default-rtdb.firebaseio.com",
  projectId: "login-8855a",
  storageBucket: "login-8855a.appspot.com",
  messagingSenderId: "21236888841",
  appId: "1:21236888841:web:d99d4a4777b10cce08cfd8",
  measurementId: "G-TGV0JK660K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getDatabase(app);

const auth = getAuth();
signup1.addEventListener("click", (e) => {
    var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var username = document.getElementById("user").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(analytics, "users/" + user.uid), {
        username: username,
        email: email,
      });

      alert("user created");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });

    
});
login1.addEventListener("click", (e) => {
          var email = document.getElementById("lemail").value;
          var pass = document.getElementById("lpass").value;

          const auth = getAuth();
  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const dt=new Date();
      update(ref(analytics, "users/" + user.uid), {
               last__login:dt,
              });
      alert("user login")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});