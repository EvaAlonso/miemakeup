
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../services/ApiProductsService";
import { Link } from "react-router-dom";
import trash from "../../assets/papelera.png";
import pencil from "../../assets/editar.png";

const Products = () => {

  const [products, setProducts] = useState([]);

  const getAllProductsFromService = async () => {
    const response = await getAllProducts();
    setProducts(response);
  }

  useEffect(()=>{

    getAllProductsFromService();

  }, []);

  return (
    <>
      <Link to={"/create-product"}>
      <button>Añadir producto</button>
      </Link>
      
            <div className="container-products">
                {
                    products.map((product) => (
                      <div key={product.id}>
                      <Link to={"/delete-product"} onClick={deleteProduct} >
                      <img src={trash} alt="icono papelera" />
                      </Link>
                      <Link to={`/update-product/${product.id}`} >
                      <img src={pencil} alt="icono editar" />
                      </Link>
                        <div className="container-product" >
                            <h3>{product.title}</h3>
                            <img src={product.imageUrl} alt="" width="300"/>
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