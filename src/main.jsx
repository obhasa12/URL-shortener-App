import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app'

import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyBWw9s7iGu7UZSPKOZpH0nGCslBjGjzPq8",
  authDomain: "url-shortener-app-6565b.firebaseapp.com",
  projectId: "url-shortener-app-6565b",
  storageBucket: "url-shortener-app-6565b.appspot.com",
  messagingSenderId: "886977809806",
  appId: "1:886977809806:web:305c8576f0331e2cb028df",
  measurementId: "G-WSPTTD7X5X"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
