import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { firebaseConfig } from './config/firebaseConfig';

import { getMessaging, getToken, onMessage } from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public message: any;

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  ngOnInit() {
    this.checkLoginStatus()
    this.requestPermission()
    this.listen()
  }

  firebaseAnonymousLogin() {
    firebase.auth().signInAnonymously()
      .then(() => {
        console.log('Signed in:')
      })
      .catch((error) => {
        console.log('Login error: ', error)
        // ...
    });
  }

  checkLoginStatus() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User id: ', user.uid)
        // ...
      } else {
        this.firebaseAnonymousLogin()
      }
    });
  }

  //Push notify
  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging,
     { vapidKey: firebaseConfig.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("Hurraaa!!! we got the token.....");
           console.log(currentToken);
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
    });
  }
}
