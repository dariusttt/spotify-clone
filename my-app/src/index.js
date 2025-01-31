import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{BrowserRouter} from "react-router-dom"
import{ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
   <ToastContainer
        position="bottom-center"
        autoclose={2000}
        hideProgressBar={true}
        closeButton={false}
        theme="colored"
        icon={false}
              />
              </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );

