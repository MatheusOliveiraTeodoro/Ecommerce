import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import banner1 from '../../assets/petburguer.png';
import banner2 from '../../assets/pets-idosos.png';
import banner3 from '../../assets/slide-bolo.png';

const HomeBanner = () => {
    return (
        <div className="h-80 relative mb-10">
            <h1 className="text-2xl font-bold text-center mb-4 mt-1">Galeria Best for Pet</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.2}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                speed={600}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="h-full"
            >
                <SwiperSlide>
                    <img className='w-full h-full object-cover rounded-3xl' src={banner1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full h-full object-cover rounded-3xl' src={banner2} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full h-full object-cover rounded-3xl' src={banner3} alt="" />
                </SwiperSlide>

                <div className='absolute top-1/2 left-5 transform -translate-y-1/2 z-10'>
                    <div className='bg-white w-10 h-10 rounded-full flex items-center justify-center drop-shadow-lg cursor-pointer swiper-button-prev'>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                </div>
                <div className='absolute top-1/2 right-5 transform -translate-y-1/2 z-10'>
                    <div className='bg-white w-10 h-10 rounded-full flex items-center justify-center drop-shadow-lg cursor-pointer swiper-button-next'>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
                <div className='swiper-pagination'></div>
            </Swiper>
        </div>
    );
}

export default HomeBanner;
