import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import LogoBFP from '../../../public/Logo_BFP.png';
import { useState, useEffect } from "react";

const HomeCat = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:3000/subcategorias'); 
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <section className="relative rounded-3xl mt-8">
            <div className="container mx-auto sm:px-4 lg:px-0">
                <div className="w-full mt-1">
                    <h3 className="mb-1 text-xl font-semibold capitalize">Categorias em Destaque</h3>
                    <Swiper
                        slidesPerView={9} 
                        spaceBetween={8}
                        navigation={true}
                        slidesPerGroup={3}
                        modules={[Navigation]}
                        className="overflow-visible"
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="text-center cursor-pointer overflow-hidden rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg"
                                    style={{ background: category.cor }}
                                >
                                    <img src={LogoBFP} alt="" className="mx-auto" />
                                    <h6 className="font-semibold">{category.nome_sub}</h6> 
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HomeCat;
