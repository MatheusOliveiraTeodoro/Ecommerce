import { PiBowlFoodDuotone } from "react-icons/pi";
import { FaTruckFast } from "react-icons/fa6";
import { CiDiscount1 } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-4 pb-5">
                <div className="flex flex-wrap justify-around py-4 px-4  pl-10">
                    <div className="flex items-center border-b border-black/20  pb-2 mb-2">
                        <span><PiBowlFoodDuotone className="text-2xl" /></span>
                        <span className="ml-2 text-gray-700 text-xs font-semibold">Produtos frescos todo dia</span>
                    </div>
                    <div className="flex items-center border-b border-black/20  pb-2 mb-2">
                        <span><FaTruckFast className="text-2xl" /></span>
                        <span className="ml-2 text-gray-700 text-xs font-semibold">Frete grátis em compras acima de R$..,..</span>
                    </div>
                    <div className="flex items-center border-b border-black/20  pb-2 mb-2">
                        <span><CiDiscount1 className="text-2xl" /></span>
                        <span className="ml-2 text-gray-700 text-xs font-semibold">Mega desconto mensal</span>
                    </div>
                    <div className="flex items-center border-b border-black/20 pb-2 mb-2">
                        <span><RiMoneyDollarCircleLine className="text-2xl" /></span>
                        <span className="ml-2 text-gray-700 text-xs font-semibold">Melhor preço do mercado</span>
                    </div>
                </div>

                <div className="flex flex-wrap mt-5">
                    {["BOVINA", "FRANGO", "SUÍNA", "PEIXE"].map((protein) => (
                        <div className="w-full md:w-1/4 p-2" key={protein}>
                            <h5 className="text-base mb-5 font-semibold">{`PROTEÍNA ${protein}`}</h5>
                            <ul className="list-none p-0">
                                {Array(7).fill(`PROTEÍNA ${protein}`).map((item, index) => (
                                    <li key={index} className="list-none mb-3">
                                        <Link to="#" className="text-blue-600 hover:underline">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 pb-3">
                    <p className="mb-0 text-gray-700">© Copyright 2024. All rights reserved ©</p>
                    <ul className="flex space-x-4">
                        <li >
                            <Link to="https://www.facebook.com/share/1gh83cNnqjXtToYa/?mibextid=LQQJ4d" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-blue-600 hover:text-white">
                                <FaFacebook className="text-lg" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://wa.me/message/O7OXIRLLBCPLM1" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-green-600 hover:text-white">
                                <IoLogoWhatsapp className="text-lg" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/bestforpetoficial?igsh=MXd2andhYjU2YzJ0eQ==" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:bg-red-500 hover:text-white">
                                <AiFillInstagram className="text-lg" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
