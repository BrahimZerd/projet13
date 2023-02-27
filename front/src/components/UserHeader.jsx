import { Link, Navigate } from "react-router-dom"
import React, { useEffect }   from 'react';
import bankLogo from '../assets/argentBankLogo.png'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/auth";
import { useDispatch } from "react-redux";
import { useCallback } from "react";



export default function userHeader () {

  const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    // modification a apporté avec le nom de l'utilisateur
    //fonction déconnexion
    //ajout fonction Logout au clic et remove du token .

    const user = localStorage.getItem("user");

    

      function logOut() { 
        dispatch(logout())
        return(<Navigate to="/" />)
      }

        
        
       
       
       
      
        

    
      
      

      
    

   
   
    
    return(
        <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={bankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="./user">
          <i className="fa fa-user-circle"></i>
          Tony
        </Link>
        <a className="main-nav-item" href="/" onClick={logOut}  >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>


    )
}