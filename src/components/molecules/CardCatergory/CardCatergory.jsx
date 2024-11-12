import "./CardCatergory.css";
import img from "../../../assets/imagen-maquillaje.jpg";
import { Link } from "react-router-dom";

const CardCatergory = ({catergoryTitle, catergoryPath}) => {
  return (
    <section>
      <h2>{catergoryTitle}</h2>
      <Link to={catergoryPath}>
      <img src={img} alt="maquillaje, una brocha y un colorete rosa" className="img-category" />
      </Link>
      
    </section>
  )
}

export default CardCatergory