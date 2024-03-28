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
          theme='light'
          transition={Zoom}
          closeButton={false}
      />
        <Notification/>
       </div>
   
    </>
  );
}

export default App;
