import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeCat from "../../components/Carrousels/HomeCat";
import { BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from "../../components/ProdutcItem/ProductItem";
import React from "react";
import 'swiper/css'
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules'
import { IoIosMail } from "react-icons/io";
import Propaganda from "../../assets/Propaganda.png";
import Muffin from "../../assets/muffin.png"
import HomeBanner from "../../components/Carrousels/HomeBanner";


const home = () =>{
    return(
        <>
            <HomeBanner />
            <HomeCat />

        <section className="pt-6 px-0 w-full">
            <div className="container">
                <div className="grid grid-cols-4 gap-4">
                     <div className="col-span-1">
                        <div className="sticky top-3 z-50">
                            <div className="w-full rounded-lg overflow-hidden shadow-sm">
                                <img src={Propaganda} alt="" className="w-full" />
                            </div>

                            <div className="w-full rounded-lg overflow-hidden shadow-sm">
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

                            <Button className="viewAllBtn">Ver Tudo
                                <BsArrowRightShort /></Button>
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
                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="discount flex bg-[#ffe0e0] mt-3 items-center justify-center w-full">
                            <span className="text-sm text-black/80 mr-1">Super desconto para sua</span>
                            <h2 className="font-semibold text-sm underline cursor-pointer mr-5 mt-1
                            text-[#f01515]">primeira compra.</h2>
                            <Button>BFP25%</Button>
                            <p className="text-black/40 text-xs mt-3">use o codigo de desconto no pagamento</p>
                        </div>

                        <div className="flex items-center mt-1">
                            <div className="w-3/4">
                                <h3 className="mb-0">NOVOS PRODUTOS</h3>
                                <p className="mb-0">Novos produtos atualizados para estoque.</p>
                            </div>

                            <Button className="viewAllBtn ml-auto">Ver Tudo
                                <BsArrowRightShort /></Button>
                            </div>

                            <div className="w-full mt-1 flex">
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                            </div>

                            <div className="flex mt-1 mb-2">
                                <div>
                                    <img src="" alt="" />
                                </div>

                                <div>
                                    <img src="" alt="" />
                                </div>
                            </div>

                        </div>

                     </div>
                </div>
        </section>

        <section className="mt-1 mb-1 flex items-center">
            <div className="container">
                <div className="">
                    <div className="">
                        <p className="mb-1">Até R$20,00 de desconto na sua primeira compra</p>
                        <h3 className="">Assine nosso boletim informativo e ganhe...</h3>
                        <p className="">Junte-se ao nossa inscrição de emails agora e ganhe <br />
                        atualizações de promoções e cupons. </p>
                       
                       <form>
                            <IoIosMail />
                            <input type="email" placeholder="seu email..." />
                            <Button>Inscrever-se</Button>
                       </form>
                    </div>

                    <div className="">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </section>

        
        </>
    )
}

export default home;