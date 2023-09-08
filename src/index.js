import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <ToastContainer
      position='top-left'
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      progress={undefined}
      theme="dark" />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
