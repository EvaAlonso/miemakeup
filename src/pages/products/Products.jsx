
import { useEffect, useState } from "react";
import { getAllProducts} from "../../services/ApiProductsService";
import { Link } from "react-router-dom";
import trash from "../../assets/papelera.png";
import pencil from "../../assets/editar.png";
import "./Products.css";

const Products = () => {

  const [products, setProducts] = useState([]);

  const getAllProductsFromApiService = async () => {
      const products = await getAllProducts();
      setProducts(products)
  }

  useEffect(() => {
      getAllProductsFromApiService()
      
  }, [])

  const deleteProduct = (id)=> {
    fetch("http://localhost:3000/products/" + id, {
      method: "DELETE"
    })
      .then((response)=>response.json()
      .then((data)=>getAllProductsFromApiService())
    )
  }
  
  return (
    <>
      <Link to={"/create-product"}>
      <button>Añadir producto</button>
      </Link>
      
            <div className="container-products">
                {
                    products.map((product) => (
                      <div key={product.id}>
                      
                      <button onClick={()=>deleteProduct(product.id)}><img src={trash} alt="icono papelera"  /></button>
                      
                      <Link to={`/update-product/${product.id}`} >
                      
                      <img src={pencil} alt="icono editar" onClick={()=>product.id}/>

                      
                      </Link>
                        <div className="container-product" >
                            <h3>{product.title}</h3>
                            <img src={product.imageUrl} alt="" width="300" className="product-img"/>
                            <p>{product.price}</p>
                            <p className="description">{product.description}</p>
                            
                            
                        </div>
                        </div>
                    ))
                }

            </div>
    </>
  )
}


export default Products