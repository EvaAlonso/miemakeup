import { Outlet } from "react-router-dom"
import Footer from "../components/molecules/footer/Footer"
import Header from "../components/molecules/header/Header"
/* import { CartContextProvider } from "../contex/CartContextProvider" */



const Layout = () => {
  return (
    <>
      {/* <CartContextProvider> */}
        <Header />
        <Outlet />
        <Footer />
      {/* </CartContextProvider> */}


    </>
  )
}

export default Layout