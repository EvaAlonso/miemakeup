import Nav from "../nav/Nav";
import cart from "../../../assets/lupa.png"
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <header className="header">
      <Link to="/" className="link"><h1>MieMakeUp</h1></Link> 
      <Nav />
      <img src={cart} alt="icono de lupa"  className="seach-icon"/>
      <input 
        type="search" 
        placeholder="busca tu producto" 
        className="search"
        
        />
    </header>
  )
}

export default Header