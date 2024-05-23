import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import img1 from "../assets/slider/1.png";
import img2 from "../assets/slider/2.png";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="">
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
