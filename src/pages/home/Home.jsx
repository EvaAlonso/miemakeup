import "./Home.css"
import CardProduct from '../../components/molecules/CardProduct/CardProduct';
import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts } from "../../services/ApiProductsService";

const Home = () => {
  
  const [products, setProducts] = useState([]);

  const getAllProductsFromService = async () => {
    const response = await getAllProducts();
    setProducts(response);
  }


  useEffect(()=>{

    getAllProductsFromService()
    

  }, []);

  return (
    <>

    <h1 className="title">Mi página principal con las categorías de productos</h1>
    <div className="products-container">
      {
        products.map((product) => (
          <div key={product.id}> 
          <CardProduct
          title={product.title}
          imageUrl={product.imageUrl}
          price={product.price}
          description={product.description}
          />
          </div>
        ))
      }
    </div>
    
    </>
  )
}

export default Home