import FormSignUp from "./pages/Forms/FormSignUp";
import FormSignIn from "./pages/Forms/FormSignIn";
import FormForgotPass from "./pages/Forms/FormForgotPass";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import { createContext, useState } from "react";
import Footer from "./components/Footer/footer";
import ProductModal from "./components/ProdutcItem/ProductModal";
import Loja from "./pages/Loja/loja"


const MyContext = createContext();

function App() {

  const [isOpenProductModal,setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setisLogin] = useState(false);

  
  const values={
    setisHeaderFooterShow,
    isHeaderFooterShow,
    setisOpenProductModal,
    isOpenProductModal
  }

  return (
    <BrowserRouter> 
    <MyContext.Provider value={values}>
      {
        isHeaderFooterShow === true &&  <Header />
      }
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route exact={true} path="/FormSignUp" element={<FormSignUp />} />
          <Route exact={true} path="/FormSignIn" element={<FormSignIn />} />
          <Route exact={true} path="/FormForgotPass" element={<FormForgotPass />} />
          <Route exact={true} path="/Loja" element={<Loja />} />
        </Routes>
        {
          isHeaderFooterShow === true &&  <Footer/>
        }
        
        {
          isOpenProductModal ===true && <ProductModal  />
        }

      </MyContext.Provider>
    </BrowserRouter>  
  )
}

export default App
export {MyContext};