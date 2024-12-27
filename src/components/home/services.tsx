"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { services } from "@/lib/constants";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col gap-10 bg-[#ffeded] p-5 md:p-[50px]">
      {/* Section Title */}
      <div className="flex flex-col">
        <div className="w-fit font-semibold text-[28px] md:text-[36px]">
          Services
          <span className="bg-clip-text bg-gradient-to-t from-primary3 to-primary2 ml-2 font-semibold text-transparent">
            We Provide
          </span>
        </div>
        <div className="bg-primary2 rounded-md w-[120px] md:w-[150px] h-[8px]"></div>
      </div>

      {/* Swiper Slider */}
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 0, // Continuous movement
            disableOnInteraction: false, // Do not stop autoplay on interaction
            pauseOnMouseEnter: true, // Pause autoplay when hovering
          }}
          speed={2500} // Adjust speed for smooth scrolling
          allowTouchMove={false} // Disable dragging
        >
          {/* Swiper Slides */}
          {services.map(({ word, description, num }, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-4 bg-[#ffffffa5] shadow-md p-6 rounded-lg min-h-[400px] md:min-h-[350px]">
                <div className="flex justify-center items-center bg-[#f9cfcf] p-3 rounded-full w-fit">
                  <p className="flex justify-center items-center bg-primary2 rounded-full w-[35px] h-[35px] text-white">
                    {num}
                  </p>
                </div>
                <h1 className="font-[500]">{word}</h1>
                <p>{description}</p>
              </div>
            </SwiperSlide>
          ))}
          {/* Add more slides as needed */}
        </Swiper>
      </div>
      <Link
        href="/services"
        className="flex justify-center items-center w-full"
      >
        <div className="bg-primary2 px-6 py-3 rounded-md w-fit font-[500] text-[16px] text-white cursor-pointer">
          More Services
        </div>
      </Link>
    </div>
  );
}
