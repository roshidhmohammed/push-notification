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
    <div className="App">
       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
