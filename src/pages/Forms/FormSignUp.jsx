import TextField from "@mui/material/TextField";
import Logo_BFP from '../../../public/Logo_BFP.png';
import Google from '../../../public/google.webp';
import Button from '@mui/material/Button';
import { TiCancelOutline } from "react-icons/ti";
import { useContext, useEffect, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ModalContext } from "../../App";
import axios from "axios";

const FormSignUp = () => {
    const context = useContext(ModalContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
    }, []);

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [termsAccepted, setTermsAccepted] = useState(false);
    const [telefone, setTelefone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert("Você precisa aceitar os termos e condições para se cadastrar.");
            return;
        }

        const userData = {
            nome: e.target.nome.value,
            sobrenome: e.target.sobrenome.value,
            email: e.target.email.value,
            senha: e.target.senha.value,
            telefone,
        };

        try {
            const response = await axios.post('http://localhost:3000/usuarios', userData);
            console.log('Usuário cadastrado com sucesso:', response.data);
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            if (error.response) {
                console.error('Erro ao cadastrar usuário:', error.response.data);
                alert(`Erro: ${error.response.data.message || 'Erro ao cadastrar usuário. Tente novamente.'}`);
            } else {
                console.error('Erro:', error.message);
                alert('Erro inesperado. Tente novamente.');
            }
        }
    };

    const handleTermsChange = (e) => {
        setTermsAccepted(e.target.checked);
    };

    const handleTelefoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';

        if (value.length > 0) {
            formattedValue += '(' + value.slice(0, 2);
        }
        if (value.length >= 3) {
            formattedValue += ') ' + value.slice(2, 7);
        }
        if (value.length >= 7) {
            formattedValue += '-' + value.slice(7, 11);
        }

        setTelefone(formattedValue);
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-red-400">
            <div className="w-2/5 mt-4 px-0 pt-11 py-5 rounded-lg ">
                <section className="w-full relative overflow-hidden">
                    <div className="absolute top-auto bottom-1 left-0 right-0 z-10">
                        <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{ enableBackground: 'new 0 0 1921 819.8' }}>
                            <path className="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path>
                        </svg>
                    </div>

                    <div className="min-w-96">
                        <div className="border-0 shadow-md p-3 w-full h-auto bg-slate-100 m-auto relative z-50 rounded-xl">
                            <div className="flex justify-center ">
                                <img src={Logo_BFP} className="w-32" alt="Logo" />
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col relative pt-5 px-8">
                                <h1 className="font-medium text-[1.5rem] text-black">Cadastrar-se</h1>

                                <div className="flex mb-6">
                                    <div className="mr-4">
                                        <TextField label="Nome" type="text" required name="nome" variant="standard" />
                                    </div>
                                    <div>
                                        <TextField label="Sobrenome" type="text" required name="sobrenome" variant="standard" />
                                    </div>
                                </div>

                                <div className="flex mb-6">
                                    <div className="mr-4 flex-grow">
                                        <TextField
                                            label="Telefone"
                                            type="text"
                                            required
                                            name="telefone"
                                            variant="standard"
                                            value={telefone}
                                            onChange={handleTelefoneChange}
                                            placeholder="( ) 12345-6789"
                                        />
                                    </div>
                                    <div className="flex-grow relative">
                                        <TextField
                                            label="Senha"
                                            type={showPassword ? "text" : "password"}
                                            name="senha"
                                            required
                                            variant="standard"
                                            InputProps={{
                                                endAdornment: (
                                                    <Button
                                                        type="button"
                                                        onClick={togglePasswordVisibility}
                                                        style={{
                                                            background: 'none',
                                                            border: 'none',
                                                            cursor: 'pointer',
                                                            position: 'absolute',
                                                            right: 0,
                                                            color: 'black',
                                                        }}
                                                    >
                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                    </Button>
                                                ),
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <TextField label="Email" type="text" required name="email" variant="standard" fullWidth />
                                </div>

                                <Link to={"/FormForgotPass"} className="font-medium text-base cursor-pointer relative text-[#337ab7] no-underline border-effect">Esqueci a Senha</Link>

                                <div className="flex items-center mt-3 mb-3">
                                    <div className="flex-grow">
                                        <Button type="submit" className="btn-red btn-big w-48 h-10" disabled={!termsAccepted} variant="contained">Registrar</Button>
                                    </div>
                                    <div className="ml-10">
                                        <Link to={"/"}>
                                            <Button variant="outlined" className="w-44 h-11" onClick={() => context.setisHeaderFooterShow(true)} startIcon={<TiCancelOutline />}>Cancelar</Button>
                                        </Link>
                                    </div>
                                </div>

                                <p className="font-medium">Já está cadastrado? <Link to="/FormSignIn" className="cursor-pointer border-effect">Entrar</Link></p>
                                <div>
                                    <a href="#" className="text-xs underline mb-2">Leia os termos</a>
                                    <div className="flex gap-2 items-center">
                                        <input type="checkbox" id="terms" checked={termsAccepted} onChange={handleTermsChange} />
                                        <label htmlFor="terms">Eu aceito os Termos e Condições</label>
                                    </div>
                                </div>

                                <h6 className="mt-3 mb-2 font-bold text-base text-center">Continuar com redes sociais</h6>
                                <Button variant="outlined"><img src={Google} className="w-7 mr-1" alt="Google" />Sign in with Google</Button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FormSignUp;
