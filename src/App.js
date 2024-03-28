import logo from './logo.svg';
import './App.css';
import {ToastContainer, Zoom} from "react-toastify";
import Notification from "./firebaseNotifications/Notification";

function App() {
  return (
    <>
    <div >
       <ToastContainer
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
      />
        <Notification/>
        <h1>Hi React</h1>
       </div>
   
    </>
  );
}

export default App;
