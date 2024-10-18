import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from "swiper/modules";

import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

import teste from '../../assets/Suino_Sem_Fundo.png';
import { useRef, useState } from "react";


const ProductZoom = () => {

    const [slideIndex, setslideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setslideIndex(index);
        zoomSlider.current.swiper.slideGoTo(index);
        zoomSliderBig.current.swiper.slideGoTo(index);
    }

    return(
        <div>
            <div className="relative">
                <div className="">23%</div>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={false}
                slidesPerGroup={1}
                modules={{Navigation}}
                className=""
                ref={zoomSliderBig}
            >
                <SwiperSlide>
                    <div className="">
                        <InnerImageZoom
                        zoomType="hover"
                        zoomScale={1}
                        src={teste}
                        >
                        </InnerImageZoom>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <InnerImageZoom
                        zoomType="hover"
                        zoomScale={1}
                        src={teste}
                        >
                        </InnerImageZoom>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <InnerImageZoom
                        zoomType="hover"
                        zoomScale={1}
                        src={teste}
                        >
                        </InnerImageZoom>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <InnerImageZoom
                        zoomType="hover"
                        zoomScale={1}
                        src={teste}
                        >
                        </InnerImageZoom>
                    </div>
                </SwiperSlide>

            </Swiper>
            </div>

            <div className="relative">
            <div className='badge badge-primary'>23%</div>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                navigation={false}
                                slidesPerGroup={1}
                                modules={{Navigation}}
                                className=""
                                ref={zoomSlider}
                                >
                                    <SwiperSlide>
                                <div className={` ${slideIndex === 0 && ''}`}>
                                    <img src={teste} alt="" className="w-full" onClick={() => goto(0)} />
                                </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                <div className={` ${slideIndex === 1 && ''}`}>
                                    <img src={teste} alt="" className="w-full" onClick={() => goto(0)} />
                                </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                <div className={` ${slideIndex === 2 && ''}`}>
                                    <img src={teste} alt="" className="w-full" onClick={() => goto(0)} />
                                </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                <div className={` ${slideIndex === 3     && ''}`}>
                                    <img src={teste} alt="" className="w-full" onClick={() => goto(0)} />
                                </div>
                                    </SwiperSlide>

                            </Swiper>
            </div>
        </div>
    )
}

export default ProductZoom;