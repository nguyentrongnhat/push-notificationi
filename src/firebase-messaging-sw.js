importScripts("https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBmMDYNkQX9gk40ZYccvPfek98nS3_5y1w",
  authDomain: "test-host-fuapp.firebaseapp.com",
  projectId: "test-host-fuapp",
  storageBucket: "test-host-fuapp.appspot.com",
  messagingSenderId: "736497898103",
  appId: "1:736497898103:web:90d713e221e42d33baec72",
  measurementId: "G-427B089FVT"
});

const messaging = firebase.messaging();
