"use client";

import data from "@/assets/data/banner-images.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="h-full"
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={item}
            alt={`Banner ${index + 1}`}
            fill
            className="object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
