import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import UserPage from './pages/User'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/sign' element={<SignIn />} />
        <Route path="/user" element={<UserPage />} />
      
      </Routes>
      
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
