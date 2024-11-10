
import Nav from "../nav/Nav";
import cart from "../../../assets/lupa.png"

import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [search, setSearch] = useState([]);
console.log('search: ', search)

  return (
    <header className="header">
      <Link to="/" className="link"><h1>MieMakeUp</h1></Link> 
      <Nav/>
      <img src={cart} alt="" />
      <input 
        type="text" 
        placeholder="busca tu producto" 
        className="search"
        onChange={(event)=> setSearch(event.target.value)}
        />
    </header>
  )
}

export default Header