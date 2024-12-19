"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <div className="flex flex-col gap-10 p-5 md:p-[50px] bg-blue-200">
      {/* Section Title */}
      <div className="flex flex-col">
        <div className="text-[28px] md:text-[36px] font-semibold w-fit">
          Services
          <span className="ml-2 bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-transparent">
            We Provide
          </span>
        </div>
        <div className="h-[8px] w-[120px] md:w-[150px] bg-blue-500 rounded-md"></div>
      </div>

      {/* Swiper Slider */}
      <div>
        <Swiper
          modules={[Autoplay]} // Register the Autoplay module here
          spaceBetween={50}
          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide for mobile screens
            },
            768: {
              slidesPerView: 3, // 3 slides for screens 768px and larger
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
              <div className="flex flex-col min-h-[400px] md:min-h-[350px] gap-4 p-6 bg-[#ffffffa5] shadow-md rounded-lg">
                <div className="flex justify-center items-center bg-[#60a5fa64] p-3 w-fit rounded-full">
                  <p className="flex items-center justify-center bg-blue-400 w-[35px] h-[35px] text-white rounded-full">
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
      <div className="w-full flex justify-center items-center">
        <div className="cursor-pointer rounded-md bg-blue-400 w-fit py-3 px-6 text-[16px] font-[500] text-white">
          Our Services
        </div>
      </div>
    </div>
  );
}
