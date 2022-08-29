import { images } from '../../../../data/images';

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
            <SwiperSlide><img src={images[0].png} alt="" /></SwiperSlide>
            <SwiperSlide><img src={images[1].png} alt="" /></SwiperSlide>
            <SwiperSlide><img src={images[2].png} alt="" /></SwiperSlide>
            <SwiperSlide><img src={images[3].png} alt="" /></SwiperSlide>
        </Swiper>
        </>
    );
}
