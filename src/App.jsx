import FormSignUp from "./pages/Forms/FormSignUp";
import FormSignIn from "./pages/Forms/FormSignIn";
import FormForgotPass from "./pages/Forms/FormForgotPass";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import { createContext, useState } from "react";
import Footer from "./components/Footer/footer";
import ProductModal from "./components/ProdutcItem/ProductModal";
import Loja from "./pages/Loja/loja";
import Contato from "./pages/Contato/contato";
import FAQ from "./pages/Faq/faq";
import Cart from "./pages/Cart/cart";
import Pagamento from "./pages/Payment/payment";
import ProductDetail from "./pages/ProductDetail/productDetail";
import { AuthProvider } from "./components/Context/useAuth";
import { MyProvider } from "./components/Context/mycontext";


const ModalContext = createContext();

function App() {

  const [isOpenProductModal,setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  
  const values={
    setisHeaderFooterShow,
    isHeaderFooterShow,
    setisOpenProductModal,
    isOpenProductModal
  }

  return (
    <MyProvider>
    <AuthProvider>
    <BrowserRouter> 
    <ModalContext.Provider value={values}>
      {
        isHeaderFooterShow === true &&  <Header />
      }
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route exact={true} path="/FormSignUp" element={<FormSignUp />} />
          <Route exact={true} path="/FormSignIn" element={<FormSignIn />} />
          <Route exact={true} path="/FormForgotPass" element={<FormForgotPass />} />
          <Route exact={true} path="/Loja" element={<Loja />} />
          <Route exact={true} path="/Contato" element={<Contato />} />
          <Route exact={true} path="/FAQ" element={<FAQ />} />
          <Route exact={true} path="/Cart" element={<Cart />} />
          <Route exact={true} path="/ProductDetail" element={<ProductDetail />} />
          <Route exact={true} path="/Pagamento" element={<Pagamento />} />
        </Routes>
        {
          isHeaderFooterShow === true &&  <Footer/>
        }
        
        {
          isOpenProductModal ===true && <ProductModal  />
        }

      </ModalContext.Provider>
    </BrowserRouter>  
    </AuthProvider>
    </MyProvider>
  )
}

export default App
export {ModalContext};