"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../app/style.css";
import Image from "next/image";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { data } from "./dummy/data";

const SliderBanner = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[80vh]"
        slidesPerView={1}
      >
        {/* 데이터 배열을 이용해서 슬라이드 생성 */}
        {data.map((v, i) => (
          <SwiperSlide key={i} className="h-full">
            <Image className="object-cover" src={v.image} alt={v.title} fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderBanner;
