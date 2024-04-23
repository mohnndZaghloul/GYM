import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { slider } from "../constants/images";

const HeroSlider = () => {
  return (
    <section>
      <Swiper
        className="swiper relative w-full h-screen object-cover"
        slidesPerView={1}
        loop
        autoplay
        modules={[Autoplay, Pagination, Navigation]}>
        {slider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              className="w-full h-full object-cover object-center"
              src={slide.Image}
              alt={slide.Image}
            />
          </SwiperSlide>
        ))}
        <div className="absolute z-10 top-0 left-0 w-full h-full text-light bg-primary-400 bg-opacity-50 flex justify-center text-center items-center">
          <h1 className="text-4xl font-semibold md:w-1/2">
            برنامج تدريبي شامل هيساعدك توصل لافضل نسخة منك تحت إشرافنا
          </h1>
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
