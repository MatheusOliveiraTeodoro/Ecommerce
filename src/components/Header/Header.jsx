import { Link } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";
import { useContext } from "react";
import { MyContext } from '../../App';
import SearchBox from "./SearchBox/SearchBox";
import { Button } from "@mui/material";
import LogoBFP from "../../../public/Logo_BFP.png"
import { GiSittingDog } from "react-icons/gi";
import { BsFillBagCheckFill } from "react-icons/bs";
import Navigation from "../Navigation/Navigation"
import { FaHandHoldingHeart } from "react-icons/fa";
import HomeCat from "../Carrousels/HomeCat";
import CityDrop from "../CityDrop/CityDrop";

const Header = () => {

    const context = useContext(MyContext);

    return(
        <div className="">
            <div className="pt-2 px-0 ">
                <div className="container mx-auto sm:px-4 lg:px-8">
                    <Link target={"_blank"} to={'https://wa.me/message/O7OXIRLLBCPLM1'}>
                        <p className="font-semibold text-sm pb-1 mb-0 mt-0 text-center flex items-center justify-center">
                            <FaTruckFast className="mr-1" />Marque suas entregas já
                        </p>
                    </Link>
                </div>
            </div>

            <header className="w-full h-auto pt-6 px-0 bg-red-400 mb-2">
                <div className="container mx-auto sm:px-4 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        {/*Logo*/}
                        <div className="w-auto sm:w-1/6 flex-shrink-0">
                            <Link to={'/'}><img src={LogoBFP} className="w-3/4"/></Link>
                        </div>

                        {/*city dropdown button */}
                       
                        <div className="flex">
                            <CityDrop />
                        </div>

                        {/*searchbox*/}
                        <div className="flex-grow px-4 ">
                            <SearchBox  />
                        </div>

                        {/* Login/Cart Section */}
                <div className="flex items-center space-x-4">
                    {
                        context.isLogin !== true ?
                        <Link to="FormSignIn">
                            <Button className="btn-tr btn-round flex items-center">
                                <GiSittingDog className="mr-1" />
                                Entre / Cadastre-se
                            </Button>
                        </Link> : 
                        <Button className="circle flex items-center">
                            <GiSittingDog />
                        </Button>
                    }

                    {/* Cart and Total */}
                    <div className="flex items-center relative">
                        <span className="text-lg text-black/80 font-bold">R$20,00</span>
                        
                        {/* Carrinho de compras */}
                        <div className="relative ml-2">
                            <Link to={"/"}>
                                <Button className="circle flex items-center relative">
                                    <BsFillBagCheckFill />
                                    <span className="absolute -top-2 -right-2 bg-[#ea2b0f] rounded-full text-white w-5 h-5 flex items-center justify-center text-xs">1</span>
                                </Button>
                                
                                    <Button className="circle">
                                        <FaHandHoldingHeart />
                                    </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <Navigation />
</div>

    )
}

export default Header;