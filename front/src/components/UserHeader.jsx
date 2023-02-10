import { Link } from "react-router-dom"
import bankLogo from '../assets/argentBankLogo.png'


export default function userHeader () {

    // modification a apporté avec le nom de l'utilisateur
    //fonction déconnexion
    return(
        <nav class="main-nav">
      <Link class="main-nav-logo" to="/home">
        <img
          class="main-nav-logo-image"
          src={bankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to="./user">
          <i class="fa fa-user-circle"></i>
          Tony
        </Link>
        <Link class="main-nav-item" to="/home">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>


    )
}