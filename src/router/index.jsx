import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Contact from "../pages/contact/Contact";
import Products from "../pages/products/Products";
import CreateProduct from "../pages/createProduct/CreateProduct";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import Catergories from "../pages/catergories/Catergories";
import Face from "../pages/face/Face";
import Eyes from "../pages/eyes/Eyes";
import Lips from "../pages/lips/Lips";
import Skincare from "../pages/skincare/Skincare";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";
import MyAccount from "../pages/myAccount/MyAccount";
import MyOrders from "../pages/myOrders/MyOrders";
import SigIn from "../pages/sigIn/SigIn";


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
        path: "products",
        element: <Products/>,
        
      },
      {
        path: "create-product",
        element: <CreateProduct/>,
      },
      {
        path: "update-product",
        element: <UpdateProduct/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "my-orders",
        element: <MyOrders/>,
      },
      {
        path: "my-account",
        element: <MyAccount/>,
      },
      {
        path: "sigin",
        element: <SigIn/>,
      },
      {
        path: "catergories",
        element: <Catergories/>,
        children: [
          {
            path: "catergories/face",
            element: <Face/>
          },
          {
            path: "eyes",
            element: <Eyes/>
          },
          {
            path: "catergories/lips",
            element: <Lips/>
          },
          {
            path: "catergories/skincare",
            element: <Skincare/>
          },
        ]
      }
    ]
  }
])