
import Nav from "../nav/Nav";
import cart from "../../../assets/lupa.png"

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/categories" className="link"><h1>MieMakeUp</h1></Link> 
      <Nav/>
      <img src={cart} alt="" />
    </header>
  )
}

export default Header