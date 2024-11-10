
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/ApiProductsService";
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

  return (
    <>
      <Link to={"/create-product"}>
      <button>Añadir producto</button>
      </Link>
      
            <div className="container-products">
                {
                    products.map((product) => (
                      <div key={product.id}>
                      <Link to={`/delete-product`}>
                      <button ><img src={trash} alt="icono papelera"  /></button>
                      </Link>
                      <Link to={`/update-product`} >
                      <img src={pencil} alt="icono editar" />
                      </Link>
                        <div className="container-product" >
                            <h3>{product.title}</h3>
                            <img src={product.imageUrl} alt="" width="300" className="product-img"/>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            
                            
                        </div>
                        </div>
                    ))
                }

            </div>
    </>
  )
}


export default Products