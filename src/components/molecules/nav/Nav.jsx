
import { NavLink } from 'react-router-dom';
import "./Nav.css";


const Nav = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-makeup">
        <li>
          <NavLink to="/categories" className="menu-navlink">Categorías</NavLink>
        </li>
        <li>
          <NavLink to="/products" className="menu-navlink">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="menu-navlink">Contacto</NavLink>
        </li>
      </ul>
    </nav> 
  )
}

export default Nav;