import {Link} from 'react-router-dom'
import bangLogo from '../assets/argentBankLogo.png'



 function header () {
    return( 
        <header>
    <nav class="main-nav">
    <Link class="main-nav-logo" to="/home">
      <img
        class="main-nav-logo-image"
        src={bangLogo}
        alt="Argent Bank Logo"
      />
      <h1 class="sr-only">Argent Bank</h1>
    </Link>
    <div>
      <Link class="main-nav-item" to="/sign">
        <i class="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  </nav>
  </header>
  )
}

export default header;