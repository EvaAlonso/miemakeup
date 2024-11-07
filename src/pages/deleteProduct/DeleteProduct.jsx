import { useState } from "react";
import Products from "../products/Products";


const DeleteProduct = () => {

  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`).then((response) => {
      const newProduct = products.filter((product) => product.id !== id);
      console.log(response)
      setProducts();
    }).catch(error => {
      console.log(error)
    });
  }

  return (
    <div>
      <Products
      deleteProduct={deleteProduct}
      />
    </div>
  )
}

export default DeleteProduct;