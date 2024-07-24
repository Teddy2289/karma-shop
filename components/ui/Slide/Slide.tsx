"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Banner } from "@/components/Section/Banner";
import { ProductBanner, SlideProps } from "@/types/ui/Slide";
import "swiper/css";

export const Slide = ({ products, slidePerView, spaceBetween }: SlideProps) => {
  return (
    <Swiper
      spaceBetween={spaceBetween || 50}
      slidesPerView={slidePerView || 1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay
    >
      {products.map((product: ProductBanner, index) => (
        <SwiperSlide key={index}>
          <Banner
            description={product.description}
            images={product.images}
            name={product.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
