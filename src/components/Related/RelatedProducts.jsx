import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../ProdutcItem/ProductItem"; 

const RelatedProducts = (props) => {
    return (
        <>
            <div className="flex items-center mt-3">
                <div className="w-3/4">
                    <h3 className="text-2xl font-bold mb-0">{props.title}</h3>
                </div>
            </div>

            <div className="w-full mt-3">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={3}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <ProductItem />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default RelatedProducts;
