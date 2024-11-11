import { useState, useEffect  } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UpdateProduct.css";
import axios from "axios";


const UpdateProduct = () => {

const { id } = useParams();

const [product, setProduct] = useState({
    id: id,
    title: "", 
    description: "",
    price: "", 
    imageUrl: ""
})

const navigate = useNavigate();

useEffect(()=>{
    axios.get("http://localhost:3000/products/" + id)
    .then(res =>setProduct(res.data))
    .catch(err => console.log(err))
}, [])


console.log(product)
const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3000/products/" + id, product )
    .then(res =>{
        alert("Producto modificado con éxito")
        navigate("/");
    })

    
}


return (
    <form onSubmit={handleSubmit}>
            <div>
                <label>Titulo del producto</label>
                <input
                    type="text"
                    
                    value={product.title}

                    onChange={(event) => setProduct({...product, title:event.target.value})}
                />
            </div>
            <div>
                <label>Descripción</label>
                <input
                    type="text"
                    value={product.description}
                    onChange={(event) => setProduct({...product, description:event.target.value})}
                />
            </div>
            <div>
                <label>Precio</label>
                <input
                    type="number"
                    min={0}
                    value={product.price}
                    onChange={(event) => setProduct({...product, price:event.target.value})}
                />
            </div>
            <div>
                <label>Url de la imagen</label>
                <input
                    type="text"
                    value={product.imageUrl}
                    onChange={(event) => setProduct({...product, imageUrl:event.target.value})}
                />
                
            </div>
            <button type="submit">Actualizar Producto</button>
            <Link to={"/"}><button>Cancelar</button></Link>
        </form>
    )
  
}


export default UpdateProduct