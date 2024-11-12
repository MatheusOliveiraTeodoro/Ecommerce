import TextField from "@mui/material/TextField";
import Logo_BFP from '../../../public/Logo_BFP.png'
import Google from '../../../public/google.webp'
import Button from '@mui/material/Button';
import { TiCancelOutline } from "react-icons/ti";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../App";
import { useAuth } from "../../components/Context/useAuth";
import axios from "axios";

const FormSignIn = () => {

    const { login } = useAuth();
    const navigate = useNavigate();


    const context = useContext(ModalContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const senha = e.target.senha.value;
    
        try {
            const response = await axios.post('http://localhost:3000/usuarios/login', { email, senha });
            console.log('Usuário logado:', response.data);
            
            login(response.data); 
            alert('Login realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Tente novamente.');
        }
    };

    useEffect(()=>{
        context.setisHeaderFooterShow(false);
    },[]);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (

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
            <div className="flex justify-center ">
                <img src={Logo_BFP} className="w-32" />
            </div>
      
   <form onSubmit={handleSubmit} className="flex flex-col relative pt-5 px-8">
        <h1 className="font-medium text-[1.5rem] text-black">Entrar</h1>
   
            <div className="mb-6 h-12 rounded-lg pl-5">
                <TextField className="w-full" label="Email" name="email" type="text" required variant="standard"></TextField>
            </div>

            <div className="mb-6 h-12 rounded-lg pl-5 flex items-center">
                <TextField className="w-full" label="Senha" type={showPassword ? "text" : "password"} 
                name="senha"
                required variant="standard">
                </TextField>

                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative',
                        left: '-35px'
                    }}
                >
          {showPassword ? (
            <span role="img" aria-label="Esconder senha"><FaEyeSlash /></span>
          ) : (
            <span role="img" aria-label="Mostrar senha"><FaEye/></span>
          )}
        </button>
            </div>

            <Link to={"/FormForgotPass"} className="font-medium text-base cursor-pointer relative text-[#337ab7] no-underline 
            border-effect">Esqueci a Senha</Link>

            <div className="flex items-center mt-3 mb-3">
                        <div className="row-span-2 grid">
                            <div className="col-start-1 col-end-3">
                                <Button type="submit" className="btn-red btn-big w-48 h-10" 
                                variant="contained">Entrar</Button>
                            </div>
                            <div className="col-end-7 col-span-2 ml-10">
                                <Link to="/"><Button variant="outlined"
                                onClick={()=>context.setisHeaderFooterShow(true)} className="w-44 h-11"
                                startIcon={<TiCancelOutline />}>Cancelar
                                </Button></Link>
                            </div>
                        </div>
                    </div>

                    <p className="font-medium">Não tem cadastro ?<Link to="/FormSignUp" className="cursor-pointer border-effect">Cadastrar-se</Link></p>
            <h6 className="mt-3 mb-2 font-bold text-base text-center">continuar com redes sociais</h6>
            <Button className="" variant="outlined"><img src={Google} className="w-7 mr-1" />Sign in with Google</Button>
          
        </form>
    </div>
        </div>
        </section>
        </div>
        </div>
  )
}

export default FormSignIn
