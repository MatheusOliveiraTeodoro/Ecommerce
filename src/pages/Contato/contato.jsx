import { Button, TextField } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";


const Contato = () => {
    return(
        <>
            <div className="flex items-center justify-center w-full p-5 gap-5">
                <div className="bg-[#be4aea] text-white w-1/3 rounded-2xl px-5 m-3 shadow-md">
                    <div className="opacity-70 text-2xl mb-3 capitalize mt-2">Junte-se a nossa newsletter</div>
                    <div className="font-semibold text-lg mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam quidem soluta quam eaque eos natus dicta temporibus, eius alias illo rem consectetur! Laboriosam aliquam voluptatem vel earum reiciendis exercitationem.</div>
                    <div className="opacity-70 mb-3 text-xs">Rua Bartolomeu Bueno da Silva 117 - Taquaral - CEP 13076-230</div>
                    <div className="opacity-70 mb-3 text-xs">Seg - Sex: 7h00 - 17h00</div>
                    <div className="text-[#a1cde6] underline">bestforpet@yahoo.com</div>
                    <div className="font-semibold text-2xl mt-3 mb-3">Siga-nos</div>
                    <div className="flex gap-3 mt-3 mb-5">
                        <FaFacebookF />
                        <FaInstagram />
                        <IoLogoYoutube />
                </div>
                <div style={{ opacity: 0.7, fontSize: 12 }}>©2024 Política de privacidade</div>
            </div>

            <div className="rounded-2xl shadow-md p-5 m-3 bg-[#fff]">

                <TextField id="standard-basic" label="Coloque seu nome" type="name" required
                variant="standard" className="w-full" />

                <TextField id="standard-basic" label="Coloque um email valido" type="email" required
                variant="standard" className="w-full" />

                <TextField 
                    id="standard-basic" 
                    label="Escreva sua menssagem" 
                    type="text" 
                    required
                    variant="standard" 
                    className="w-full" 
                    multiline
                    rows={1}
                    />
                    <div className="h-1 bg-[#ccc] m-5"></div>
                    <Button className="roundedbutton">ENVIAR</Button>
                </div>
            </div>
        </>
    )
}

export default Contato;