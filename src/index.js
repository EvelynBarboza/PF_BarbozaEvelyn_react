import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDutETSyjZbEgUzwo0lWbZ5QHa3xe1fxTs",
  authDomain: "ecommerce-ananda.firebaseapp.com",
  projectId: "ecommerce-ananda",
  storageBucket: "ecommerce-ananda.appspot.com",
  messagingSenderId: "20143494698",
  appId: "1:20143494698:web:fef81ed1c0f4ccf7e0d553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
