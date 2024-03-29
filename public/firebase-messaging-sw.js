// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token


// let self = this



// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDni2e91OLdsKXb1zmIZAyr8gtSyBuVpOs",
  authDomain: "push-notification-516d5.firebaseapp.com",
  projectId: "push-notification-516d5",
  storageBucket: "push-notification-516d5.appspot.com",
  messagingSenderId: "124290176895",
  appId: "1:124290176895:web:155c0c9c4b86b0f6722c4a",
  measurementId: "G-HD131NGRD2"
};


const app = firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging(app);

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon:payload.notification.image,
  };

  self.registration.showNotification(notificationTitle,
      notificationOptions);
});