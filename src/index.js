import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDt9b2MOKFO37a6xnLlacbcolyZwmhVguI",
  authDomain: "coderhouse-react-eccomerce.firebaseapp.com",
  projectId: "coderhouse-react-eccomerce",
  storageBucket: "coderhouse-react-eccomerce.appspot.com",
  messagingSenderId: "922812942972",
  appId: "1:922812942972:web:9e992166cbaa6affdb57f9",
};

initializeApp(firebaseConfig);



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
