import axios from "axios";

const apiProductsUrl = "http://localhost:3000/products";

const getAllProducts = async () => {
    const response = await axios.get(apiProductsUrl);
    return response.data;
}

const createProduct = async (newProduct) => {
    const response = await axios.post(apiProductsUrl, newProduct);
    return response.data;
}

const updateProduct = async (id, newProduct) => {
    const response = await axios.put(`${apiProductsUrl}/${id}`, newProduct);
    return response.data;
}

/* const deleteProduct = async (id) => {
    const response = await axios.delete(apiProductsUrl);
    return ( response.data.products.filter((product) => {
        return product.id !== id;
      }));
} */

export {
    getAllProducts,
    createProduct,
    updateProduct
    /* deleteProduct */
}
