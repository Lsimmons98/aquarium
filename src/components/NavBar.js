import { NavLink } from "react-router-dom"
import "../style.css"

function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/calculator" className="nav-link">
          Calculator
        </NavLink>
        <NavLink to="/favorites" className="nav-link">
          Favorites
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar
