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
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-around py-6">
                    <div className="flex items-center">
                        <span><PiBowlFoodDuotone /></span>
                        <span className="ml-2 text-gray-700">Produtos frescos todo dia</span>
                    </div>
                    <div className="flex items-center">
                        <span><FaTruckFast /></span>
                        <span className="ml-2 text-gray-700">Frete grátis em compras acima de R$..,..</span>
                    </div>
                    <div className="flex items-center">
                        <span><CiDiscount1 /></span>
                        <span className="ml-2 text-gray-700">Mega desconto mensal</span>
                    </div>
                    <div className="flex items-center">
                        <span><RiMoneyDollarCircleLine /></span>
                        <span className="ml-2 text-gray-700">Melhor preço do mercado</span>
                    </div>
                </div>

                <div className="flex flex-wrap mt-5">
                    {["BOVINA", "FRANGO", "SUÍNA", "PEIXE"].map((protein) => (
                        <div className="w-full md:w-1/4 p-2" key={protein}>
                            <h5 className="font-bold">{`PROTEÍNA ${protein}`}</h5>
                            <ul className="list-none p-0">
                                {Array(7).fill(`PROTEÍNA ${protein}`).map((item, index) => (
                                    <li key={index}>
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
                        <li>
                            <Link to="#" className="text-gray-700 hover:text-blue-600"><FaFacebook /></Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-700 hover:text-blue-600"><IoLogoWhatsapp /></Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-700 hover:text-blue-600"><AiFillInstagram /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
