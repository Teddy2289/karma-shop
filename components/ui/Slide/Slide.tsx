"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Banner } from "@/components/Section/Banner";
import { ProductBanner, SlideProductProps, SlideProps } from "@/types/ui/Slide";
import "swiper/css";
import NewSection from "@/components/Section/NewArival/NewSection";
import { Navigations } from "./Navigation";
import { Navigation } from "swiper/modules";
import { Span } from "../Typography";
import { GrLinkNext } from "react-icons/gr";

export const Slide = ({
  products,
  slidePerView,
  spaceBetween,
  hasNavigation = false,
  nextClass,
  prevClass,
}: SlideProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween || 50}
        slidesPerView={slidePerView || 1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
        autoplay
        loop={true}>
        {hasNavigation
          ? products.map((product: SlideProductProps, index) => (
              <SwiperSlide key={index}>
                <NewSection
                  key={index}
                  description={product.description}
                  products={product.products}
                  title={product.title}
                />
              </SwiperSlide>
            ))
          : products.map((product: ProductBanner, index) => (
              <SwiperSlide key={index}>
                <Banner
                  description={product.description}
                  images={product.images}
                  name={product.name}
                />
              </SwiperSlide>
            ))}
        {hasNavigation && (
          <>
            <div
              className={`flex flex-col justify-center absolute top-0 left-[30%] translate-x-[-30%] gap-3 text-gray-500 hover:text-black ${prevClass} text-center z-20 cursor-pointer select-none group`}>
              <Span classname="uppercase font-semibold text-gray-500 group-hover:text-black">
                prev
              </Span>
              <GrLinkNext className={`scale-x-[2.5] rotate-180`} />
            </div>
            <div
              className={`flex flex-col gap-3 text-gray-500 hover:text-black ${nextClass} absolute top-0 right-[28%] translate-x-[-28%] text-center z-20 cursor-pointer select-none group`}>
              <Span classname="uppercase font-semibold text-gray-500 group-hover:text-black">
                next
              </Span>
              <GrLinkNext className={`scale-x-[2.5] `} />
            </div>
          </>
        )}
      </Swiper>
    </>
  );
};
