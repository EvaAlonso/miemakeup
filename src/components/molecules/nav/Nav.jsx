
import { NavLink } from 'react-router-dom';
import "./Nav.css";


const Nav = () => {

  return (
    <nav className="nav-container" id="navbar">
      <ul className="nav-makeup">
        <li>
          <NavLink to="/products" className="menu-navlink">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/catergories" className="menu-navlink">Categorías</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="menu-navlink">Contacto</NavLink>
        </li>
      </ul>
      <ul className="nav-user">
        <li>mie@falso.com</li>
        <li >
          <NavLink to = "/my-orders" className="menu-navlink">
            Pedidos
          </NavLink>
        </li>
        <li>
          <NavLink to = "/my-account" className="menu-navlink">
            Mi Cuenta
          </NavLink>
        </li>
        <li>
          <NavLink to = "/sigin" className="menu-navlink">
            Entrar
          </NavLink>
        </li>
        <li>
          🛒
        </li>

      </ul>
    </nav> 
  )
}

export default Nav;