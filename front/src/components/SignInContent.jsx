import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Login } from "../slices/auth";
import { setMessage } from "../slices/message";


export default function signInContent() {
  const { isLoggedIn } = useSelector((state) => state.auth);
 let navigate = useNavigate();

 const user = localStorage.getItem("user");


 const dispatch = useDispatch();




    async function handleSubmit (e) {
      
      e.preventDefault()
      const email  = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      dispatch(Login({email,password}))
      
      
}     


    if(isLoggedIn) {
      return (<Navigate to="/user" />)
    }





   
    
 
    return(
        <main className="main bg-dark">
        <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
          </div>
         
         
          
           <button className="sign-in-button">Sign In</button> 
          
        </form>
      </section>
      </main>
    )
}