import logo from './logo.svg';
import './App.css';
// import {ToastContainer, toast,Zoom} from "react-toastify";
import Notification from "./firebaseNotifications/Notification";
import { useEffect, useState } from 'react';
import {generateToken, messaging} from "./firebaseNotifications/firebase"
import { onMessage } from 'firebase/messaging';
import  toast, { Toaster } from 'react-hot-toast';

function App() {
  const [data, setData]= useState({title:"", body:""})
  useEffect(()=>{
    generateToken()
    onMessage(messaging, (payload)=>{
      setData({title:payload?.notification?.title, body:payload?.notification?.body})
      toast(payload?.notification?.body)
    })
  },[data])
  // console.log('Message Received', data)
  // const notify = () => toast(data?.body);
  return (
    <>
    <div >
    <Toaster />
       {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          transition={Zoom}
          closeButton={false}
      /> */}
        {/* <Notification/> */}
        {/* <button onClick={notify}>notify</button> */}
       </div>
       <div>
       <h1>Hi React</h1>
       </div>
   
    </>
  );
}

export default App;
