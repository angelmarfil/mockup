import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "../assets/slider/1.png";
import img2 from "../assets/slider/2.png";
import img3 from "../assets/slider/3.png";
import img4 from "../assets/slider/4.png";
import img5 from "../assets/slider/5.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{ delay: 2500 }}
        className="w-full h-44 md:h-56 select-none"
      >
        <SwiperSlide className="flex justify-center items-center">
          <img src={img1} alt="" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src={img2} alt="" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src={img3} alt="" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src={img4} alt="" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src={img5} alt="" className="block w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
