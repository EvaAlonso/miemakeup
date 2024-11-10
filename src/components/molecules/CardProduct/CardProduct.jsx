
import { useState } from "react";
import mas from "../../../assets/mas-azul.png";
import menos from "../../../assets/menos-azul.png";
import "./CardProduct.css";

const CardProduct = ({ title, imageUrl, price, description }) => {

  const [count, setCount] = useState(0)

  const estrellas = document.querySelectorAll('.star');
  estrellas.forEach((estrella, rating) => {
    estrella.addEventListener('click', () => {
      estrellas.forEach((starpink, rating1) => {
        if (rating1 <= rating) {
          starpink.classList.add('star-pink');
        } else {
          starpink.classList.remove('star-pink');
        }
      })
    });
  });
  return (
    <section className="card-section">

      <h2 className="title">{title}</h2>
      <figure className="figure">
        <img src={imageUrl} alt={title} className="img-cardProduct" />
      </figure>
      <p className="add-title">Añadir al carrito 🛒</p>
      <section className="car-section">
        <p className="price">{price} €</p>
        <img src={menos} alt="símbolo de menos" className="icon" onClick={() =>setCount(count - 1)} />
        <span id="car-number">{count}</span>
        <img src={mas} alt="símbolo de más" className="icon" onClick={() =>setCount(count + 1)} />
      </section>
      <section className="star-container">
        <div className="star star-gray"></div>
        <div className="star star-gray"></div>
        <div className="star star-gray"></div>
        <div className="star star-gray"></div>
        <div className="star star-gray"></div>
      </section>
      <details className="details">
        <summary className="summary">Descripción</summary>
        <p>{description}</p>
      </details>
    </section>
  )
}

export default CardProduct