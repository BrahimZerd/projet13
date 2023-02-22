import { Link } from "react-router-dom"
import React   from 'react';
import bankLogo from '../assets/argentBankLogo.png'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/auth";



export default function userHeader () {
  const Navigate = useNavigate();

    // modification a apporté avec le nom de l'utilisateur
    //fonction déconnexion
    //ajout fonction Logout au clic et remove du token .

    const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
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
        <Link className="main-nav-item" to="/sign" >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>


    )
}