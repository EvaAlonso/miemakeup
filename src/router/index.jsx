import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Contact from "../pages/contact/Contact";
import Products from "../pages/products/Products";
import CreateProduct from "../pages/createProduct/CreateProduct";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import Categories from "../pages/categories/Categories";
import Face from "../pages/face/Face";
import Eyes from "../pages/eyes/Eyes";
import Lips from "../pages/lips/Lips";
import Skincare from "../pages/skincare/Skincare";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products/>,
        
      },
      {
        path: "/create-product",
        element: <CreateProduct/>,
      },
      {
        path: "/update-product/",
        element: <UpdateProduct/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/categories",
        element: <Categories/>,
        children: [
          {
            path: "categories/face",
            element: <Face/>
          },
          {
            path: "categories/eyes",
            element: <Eyes/>
          },
          {
            path: "categories/lips",
            element: <Lips/>
          },
          {
            path: "categories/skincare",
            element: <Skincare/>
          },
        ]
      }
    ]
  }
])