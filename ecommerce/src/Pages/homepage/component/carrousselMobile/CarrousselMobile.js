// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./carrousselMobile.scss";

// import required modules
import { Navigation } from "swiper";

export default function App() {


    return (
        <>
        <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src="/img/image-product-1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/image-product-2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/image-product-3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/img/image-product-4.jpg" alt="" /></SwiperSlide>
        </Swiper>
        </>
    );
}
