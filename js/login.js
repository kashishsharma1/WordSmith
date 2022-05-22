// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD2NtsfsuLbytBx4fBB-l_vBQNUqx850qI",
    authDomain: "fir-wordsmith2.firebaseapp.com",
    projectId: "fir-wordsmith2",
    storageBucket: "fir-wordsmith2.appspot.com",
    messagingSenderId: "645741825037",
    appId: "1:645741825037:web:030ca318571eca87a5d944",
    measurementId: "G-LMGC82DS9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
document.getElementById("register").addEventListener('click',function(){
    const email = document.getElementById("regemail").value
    const password = document.getElementById("regpassword").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      alert("Registered")
   })

  /*createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })*/
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+errorMessage)
  });
})

  document.getElementById("login").addEventListener('click',function(){
    const email1 = document.getElementById("loginemail").value
    const password1 = document.getElementById("loginpassword").value
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email1, password1)
      .then((userCredential) => {
       // Signed in 
      const user = userCredential.user;
      alert("Logged in")
      // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.alert(errorCode+errorMessage)
      })
    })
   /*const auth = getAuth();
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })*/

  window.signOut = function signOut(e) {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("done")
    alert("Logged Out")
    }).catch(function(error) {
    // An error happened.
    });
  }