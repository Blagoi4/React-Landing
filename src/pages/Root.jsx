import { Outlet } from "react-router-dom"

import Footer from '../components/Footer'
import Header from "../components/Hed"

const Root = () => {
return (
    <>
     <Header/>
    <Outlet/>
    <Footer/>
    </>
 
    
)
}

export default Root