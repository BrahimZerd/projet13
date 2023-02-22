import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import UserPage from './pages/User'
import { Provider } from 'react-redux';
import store from './store/store';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sign' element={<SignIn />} />
        <Route path="/user" element={<UserPage />} />
      
      </Routes>
      
      
    </Router>
    </Provider>
    
  </React.StrictMode>

  

  
);













