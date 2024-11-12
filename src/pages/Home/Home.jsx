import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeCat from "../../components/Carrousels/HomeCat";
import { BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from "../../components/ProdutcItem/ProductItem";
import React, { useEffect, useState } from "react";
import 'swiper/css'
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules'
import { IoIosMail } from "react-icons/io";
import Propaganda from "../../assets/BoloforPet.gif"
import Muffin from "../../assets/muffin.png"
import HomeBanner from "../../components/Carrousels/HomeBanner";
import banner1 from "../../assets/banner3.png";
import banner2 from "../../assets/banne4.png";
import cupom from '../../assets/cupom.png'
import axios from "axios";

const home = () =>{
    const [novosProdutos, setNovosProdutos] = useState([]);
    const [bestsalers, setBestsalers] = useState([]);

    useEffect(() => {
        // Carregar todos os produtos
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:3000/produto', {
              params: { orderByDate: 'desc' }  // Para obter produtos ordenados pela data
            });
            setNovosProdutos(response.data);
          } catch (error) {
            console.error("Erro ao buscar produtos:", error);
          }
        };
        
        // Carregar produtos mais vendidos
        const fetchBestsalers = async () => {
          try {
            const response = await axios.get('http://localhost:3000/produto', {
              params: { bestsaler: 'true' }  // Filtrando apenas produtos "mais vendidos"
            });
            setBestsalers(response.data);
          } catch (error) {
            console.error("Erro ao buscar produtos mais vendidos:", error);
          }
        };
    
        fetchProducts();
        fetchBestsalers();
      }, []);
    
    return(
        <>
            <HomeBanner />
            <HomeCat />
 
            <section className="py-6 px-0 w-full">
    <div className="container">
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
                <div className="sticky top-3 z-50 ml-5">
                    <div className="w-full rounded-lg overflow-hidden shadow-md mb-5">
                        <img src={Propaganda} alt="" className="w-full" />
                    </div>
                    <div className="w-full rounded-lg overflow-hidden shadow-md mr-5">
                        <img src={Muffin} alt="" className="mt-1 w-full" />
                    </div>
                </div>
            </div>

            <div className="col-span-3">
                <div className="flex items-center">
                    <div className="w-3/4">
                        <h3 className="mb-0 text-xl font-semibold uppercase">MAIS VENDIDOS</h3>
                        <p className="mb-0 text-[#8b8b8b] text-sm">Não perca as novidades.</p>
                    </div>
                    <Link to="/Loja">
                        <Button className="viewAllBtn">Ver Tudo <BsArrowRightShort /></Button>
                    </Link>
                </div>

                <div className="w-full mt-1 -ml-3 -mr-3">
                    <Swiper 
                        slidesPerView={4}
                        spaceBetween={0}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Navigation]}
                        className="mySwiper pr-20"
                    >
                    </Swiper>
                </div>

                <div className="w-full mt-1 grid grid-cols-4 gap-4">
                    {bestsalers && bestsalers.length > 0 ? (
                    bestsalers.slice(0, 8).map((product) => (
                        <ProductItem key={product.id} product={product} className="flex flex-col" />
                    ))
                    ) : (
                    <div>Carregando produtos mais vendidos...</div>
                    )}
                </div>

                <div className="flex bg-[#ffe0e0] mt-3 items-center justify-center">
                    <span className="text-sm text-black/80 mr-1">Super desconto para sua</span>
                    <h2 className="font-semibold text-sm underline cursor-pointer mr-5 -mt-0.5 text-[#f01515]">primeira compra.</h2>
                    <Button className="cupombtn">BFP25%</Button>
                    <p className="text-black/40 text-xs mt-1 ml-3">use o codigo de desconto no pagamento</p>
                </div>

                <div className="flex items-center mt-1">
                    <div className="w-3/4">
                        <h3 className="mb-0 text-lg font-bold">NOVOS PRODUTOS</h3>
                        <p className="mb-0 text-sm text-[#8b8b8b]">Novos produtos atualizados</p>
                    </div>
                    <Link to="/Loja">
                        <Button className="viewAllBtn">Ver Tudo <BsArrowRightShort /></Button>
                    </Link>
                </div>

                <div className="w-full mt-1 grid grid-cols-4 gap-4">
                    {novosProdutos && novosProdutos.length > 0 ? (
                    novosProdutos.slice(0,8).map((product) => (
                        
                        <ProductItem key={product.id} product={product} className="flex flex-col">

                        </ProductItem>
                    ))
                    ) : (
                    <div>Carregando novos produtos...</div>
                    )}
                </div>

                <div className="flex mt-1 mb-2 gap-4">
                    <div className="w-full rounded-md overflow-hidden shadow-md mb-6">
                        <img src={banner1} alt="" className="w-full mt-6" />
                    </div>
                    <div className="w-full rounded-md overflow-hidden shadow-md mb-6">
                        <img src={banner2} alt="" className="w-full mt-6" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        <section className="mt-1 mb-1 flex items-center w-full h-auto bg-[#233a95] relative overflow-hidden p-10">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 static">
                        <p className="mb-1 text-white text-lg m-3">Até R$20,00 de desconto na sua primeira compra</p>
                        <h3 className="text-white font-bold text-4xl">Assine nosso boletim informativo e ganhe...</h3>
                        <p className="text-[#fff] opacity-50 text-lg m-3">Junte-se ao nossa inscrição de emails agora e ganhe <br />
                        atualizações de promoções e cupons. </p>
                       
                       <form className="w-full h-14 bg-[#fff] p-3 relative rounded-md">
                            <IoIosMail className="absolute top-4 left-3 text-2xl opacity-30" />
                            <input type="email" placeholder="seu email..." className="w-full h-full bg-[#fff] outline-none pl-10 pr-52" />
                            <Button className="inscreverbtn">Inscrever-se</Button>
                       </form>
                    </div>

                    <div className="w-full md:w-1/2">
                        <img src={cupom} alt="" className="w-1/2 absolute bottom-0 right-0" />
                    </div>
                </div>
            </div>
        </section>

        
        </>
    )
}

export default home;