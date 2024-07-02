import { NavLink } from "react-router-dom"
import "../style.css"

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink to="/calculator" className="nav-link">
        Calculator
      </NavLink>
      <NavLink to="/favorites" className="nav-link">
        Favorites
      </NavLink>
    </nav>
  )
}

export default NavBar
