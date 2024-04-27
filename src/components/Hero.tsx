"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiShoppingCart } from "react-icons/fi";
import bannerOne from "@/assets/images/hero-1.jpg";
import bannerTwo from "@/assets/images/hero-2.jpg";
import bannerThree from "@/assets/images/hero-3.jpg";
import iconOne from "@/assets/icons/brand-icons-1.png";
import iconTwo from "@/assets/icons/brand-icons-2.png";
import iconThree from "@/assets/icons/brand-icons-3.png";
import iconFour from "@/assets/icons/brand-icons-4.png";
import awardIcon from "@/assets/icons/award.png";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  // Categories for the sidebar navigation
  const categories = [
    "All Categories",
    "Cars and Motorcycles",
    "Music and Books",
    "Arts and Crafts",
    "Moms and Babies",
    "Softwares",
    "Home & Garden",
    "Electronics",
    "Kids and Toy",
    "Clothing and Shoes",
    "Beauty and Health",
    "Sports",
    "Jewellery",
  ];

  // Banner images for the slider
  const bannerImages = [bannerOne, bannerTwo, bannerThree];

  // Brand icons for display in the middle section
  const brandIcons = [iconOne, iconTwo, iconThree, iconFour];

  return (
    <section className="section-wrapper py-5 grid lg:grid-cols-10 gap-5">
      {/* Left section with categories sidebar  */}
      <div className="col-span-2 bg-white shadow-md p-4 space-y-3.5">
        {categories?.map((category, index) => (
          <div key={index} className="flex items-center gap-1">
            <Image src={awardIcon} alt="Award Icon" />
            <p className="whitespace-nowrap cursor-pointer">{category}</p>
          </div>
        ))}
      </div>

      {/* Middle section with image slider and brand icons */}
      <div className="col-span-5 space-y-5">
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
          modules={[Autoplay, Pagination]}
          className="mySwiper h-[calc(70%-20px)]"
        >
          {bannerImages?.map((banner, index) => (
            <SwiperSlide key={index}>
              <Image
                src={banner}
                alt="Banner Image"
                className="h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="bg-white flex items-center justify-between gap-5 shadow-md p-5 h-[30%]">
          {brandIcons?.map((icon, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <Image src={icon} alt="Brand Icon" className="size-[60px]" />
              <p className="whitespace-nowrap cursor-pointer">Brand Name</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right section with personal greeting and flash sale offer */}
      <div className="col-span-3 bg-white shadow-md p-5 space-y-4">
        <p>Good Afternoon, John Smith</p>

        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-lg font-bold">Flash Sale for You!</p>
          <p className="text-primary">
            <span className="text-4xl font-bold">40</span>
            <sub>% off</sub>
          </p>
          <p className="whitespace-nowrap">
            After 12 hr this offer will be end.{" "}
            <span className="text-primary font-bold ">Get Now</span>
          </p>

          <Image
            src="https://dvf83rt16ac4w.cloudfront.net/upload/product/20211110_1636549088_550946.png"
            width={235}
            height={300}
            alt="Product Image"
            className="object-cover"
          />

          <Button className="w-full flex items-center gap-3">
            <FiShoppingCart className="size-5" />
            Add To Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
