import { useState, useEffect  } from "react";
/* import {  updateProduct } from "../../services/ApiProductsService"; */
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UpdateProduct.css";
import axios from "axios";
import { updateProduct } from "../../services/ApiProductsService";

const UpdateProduct = () => {
  
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const navigate = useNavigate();
  const [id, setID] = useState(null);
  
  
  
  const getProductById = async (id) => {
  const response = await axios.get("http://localhost:3000/products/" + id)
  console.log(response.data)
  /* 
  setTitulo(response.data.title)
  setDescripcion(response.data.description)
  setPrecio(response.data.price)
  setUrlImagen(response.data.imageUrl) */
    
  }   
 
  /* getProductById(id) */
 useEffect(()=>{
  updateProduct()
 }, [])
  

  const upProduct = async (event) => {
      event.preventDefault();
      console.log("evento:", event)
      const editProduct = {
          title: titulo,
          description: descripcion,
          price: precio,
          imageUrl: urlImagen
      }

      await updateProduct(editProduct);
      navigate("/");
  }

 
  return (
    <form onSubmit={upProduct}>
            <div>
                <label>Titulo del producto</label>
                <input
                    type="text"
                    defaultValue={localStorage.getItem("titulo")}
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)} 
                />
            </div>
            <div>
                <label>Descripción</label>
                <input
                    type="text"
                    value={localStorage.getItem("descripcion")}
                    onChange={(event) => setDescripcion(event.target.value)}
                />
            </div>
            <div>
                <label>Precio</label>
                <input
                    type="number"
                    min={0}
                    value={localStorage.getItem("precio")}
                    onChange={(event) => setPrecio(event.target.value)}
                />
            </div>
            <div>
                <label>Url de la imagen</label>
                <input
                    type="text"
                    value={localStorage.getItem("urlImagen")}
                    onChange={(event) => setUrlImagen(event.target.value)}
                />
                
            </div>
            <button type="submit">Añadir Producto</button>
            <Link to={"/"}><button>Cancelar</button></Link>
        </form>
    )
  
}

export default UpdateProduct