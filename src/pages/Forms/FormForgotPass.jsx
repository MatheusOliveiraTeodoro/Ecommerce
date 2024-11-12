import TextField from "@mui/material/TextField";
import Logo_BFP from '../../../public/Logo_BFP.png'
import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../App";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const FormForgotPass = () =>{

    const context = useContext(ModalContext);

    useEffect(()=>{
        context.setisHeaderFooterShow(false);
    },[]);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Você precisa aceitar os termos e condições para se cadastrar.");
      return;
    }
    console.log('Formulário enviado com sucesso!');
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

    return(
        <div className="min-h-screen w-full flex flex-col items-center justify-center
    bg-gradient-to-r from-red-600 to-red-400">
        <div className="w-2/5 mt-4 px-0 pt-11 py-5 rounded-lg ">

        <section className="w-full relative overflow-hidden">
        <div className="absolute top-auto bottom-1 left-0 right-0 z-10">
        <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8"
    style={{enableBackground:'new 0 0 1921 819.8'}} ><path className="st0"
        d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7
        ,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z">
        </path></svg>
        </div>


    <div className="min-w-96">
        <div className="border-0 shadow-md p-3 w-full h-auto bg-slate-100 m-auto relative z-50 rounded-xl">
            <Link to={"/FormSignUp"}><IoArrowBackCircleSharp className="inline text-base text-black/90" />Voltar</Link>
                <div className="flex justify-center ">
                    <img src={Logo_BFP} className="w-32" />
                </div>
                
      
   <form onSubmit={handleSubmit} className="flex flex-col relative pt-5 px-8">
        <h1 className="font-medium text-[1.5rem] text-black">Redefinicao de Senha!</h1>

            <p>Informe o seu email e enviaremos um link <br/> para recuperacao de sua senha.</p>
   
            <div className="mb-6 h-12 rounded-lg pl-5">
                <TextField className="w-full" label="Email" type="text" required variant="standard"></TextField>
            </div>

            <Button className="" variant="contained">Enviar link de recuperacao</Button>
          
        </form>
    </div>
        </div>
        </section>
        </div>
        </div>
    )
}

export default FormForgotPass