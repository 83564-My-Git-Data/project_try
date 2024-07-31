import { Link } from "react-router-dom"

export function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/home">Home</Link>
          </li>

          <li>
          <Link className="nav-link " aria-current="page" to="/aboutUs">About Us</Link>
          </li>

          <li>
          <Link className="nav-link " aria-current="page" to="/schedule">Schedule</Link>
          </li>

        </ul>
        
        <ul className="navbar-nav me-0 mb-2 mb-lg-0">
        <li>
        <Link className="nav-link " aria-current="page" to="/login">Login</Link>
        </li>
        <li>
        <Link className="nav-link " aria-current="page" to="/register">Register</Link>
        </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar