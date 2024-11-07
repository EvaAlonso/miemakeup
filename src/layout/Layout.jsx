import { Outlet } from "react-router-dom"
import Footer from "../components/molecules/footer/Footer"
import Header from "../components/molecules/header/Header"

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout