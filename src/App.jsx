import FormSignUp from "./pages/Forms/FormSignUp"
import FormSignIn from "./pages/Forms/FormSignIn"
import FormForgotPass from "./pages/Forms/FormForgotPass"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import { createContext, useState } from "react"

const MyContext = createContext();

function App() {

  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setisLogin] = useState(false);

  
  const values={
    setisHeaderFooterShow,
    isHeaderFooterShow,
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
        </Routes>

      </MyContext.Provider>
    </BrowserRouter>  
  )
}

export default App
export {MyContext};