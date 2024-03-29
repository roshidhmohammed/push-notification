// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';


const firebaseConfig = {
  apiKey: "AIzaSyDni2e91OLdsKXb1zmIZAyr8gtSyBuVpOs",
  authDomain: "push-notification-516d5.firebaseapp.com",
  projectId: "push-notification-516d5",
  storageBucket: "push-notification-516d5.appspot.com",
  messagingSenderId: "124290176895",
  appId: "1:124290176895:web:155c0c9c4b86b0f6722c4a",
  measurementId: "G-HD131NGRD2"
};

const firebaseApp=initializeApp(firebaseConfig);

export const messaging = getMessaging(firebaseApp);

// export const requestForToken = () => {
//     // The method getToken(): Promise<string> allows FCM to use the VAPID key credential
//     // when sending message requests to different push services
//     return getToken(messaging, { vapidKey: `BJDlFDwWingEqHCk7d8jppFqK-r6cVv9QEZpG8zZHx1n6uLGk4WGfTEIhqjDjLW_hsSAl3JZXI731kLtWFXoujU` }) //to authorize send requests to supported web push services
//         .then((currentToken) => {
//             if (currentToken) {
//                 console.log('current token for client: ', currentToken);

//                 if(localStorage.getItem('fcmToken') && currentToken !==localStorage.getItem('fcmToken')){
//                     localStorage.setItem('fcmToken', currentToken);

//                 }

//                 else if(!localStorage.getItem('fcmToken')){
//                     localStorage.setItem('fcmToken', currentToken);

//                 }


//             } else {
//                 console.log('No registration token available. Request permission to generate one.');
//             }
//         })
//         .catch((err) => {
//             console.log('An error occurred while retrieving token. ', err);
//         });
// };

export const generateToken = async()=>{
    const permission = await Notification.requestPermission()
    // console.log(permission)
    if(permission === "granted"){
       await getToken(messaging, {
            vapidKey: 'BBCvRm__mjcmhuTEYW76Pkhsd3OogLliObbZiwVFNE2wBtPZsg5oWerQLNDYoslrMRKNQSjuyBKx4csXP0AcbZo'
        })
        .then((current)=>{

            console.log(current)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
}
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });