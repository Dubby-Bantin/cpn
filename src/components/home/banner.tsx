"use client";

import { motion } from "framer-motion";
import VideoPlayer from "../common/VideoPlayer";
import Image from "next/image";

export default function Banner() {

  return (
    <div className="relative flex justify-center items-center w-full h-[1000px] md:h-screen overflow-hidden">
      {/* <div className="z-10 absolute inset-0 bg-black/60" /> */}

      <VideoPlayer
        className="absolute"
        video={
          "/Main Comp Map Animation.mp4"
        }
      />
      <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-[20px] lg:gap-[50px] xl:gap-[250px] place-items-center px-3 md:px-0  h-full text-white w-full md:w-[98%] lg:w-[95%]">
        <div className="text-white">hello</div>
        <div className="grid grid-cols-2 gap-4 h-[90%] w-full ">
          <div className="relative grid grid-rows-3 gap-4 h-full">
            <div className="row-start-1 row-span-2 overflow-hidden rounded-xl">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/WhatsApp Image 2024-12-10 at 06.58.40_2434b008.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <div className="row-start-3 row-span-1 overflow-hidden rounded-xl">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/banner/pexels-divinetechygirl-1181360.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </div>

          <div className="relative grid grid-rows-3 gap-4 h-full">
            <div className="row-start-1 row-span-1 overflow-hidden rounded-xl">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/banner/pexels-gabby-k-9487227.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <div className="row-start-2 row-span-2 overflow-hidden rounded-xl">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/banner/pexels-mizunokozuki-12903275.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="z-20 absolute inset-0 flex flex-col justify-center items-center gap-4 px-10 text-center text-white">
        <motion.h1
          key={`header-${currentIndex}`}
          className="md:w-1/2 banner__text__gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {bannerImages[currentIndex]?.headerText}
        </motion.h1>
        <motion.p
          key={`paragraph-${currentIndex}`}
          className="md:w-1/2 font-bold text-md md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {bannerImages[currentIndex]?.paragraphText}
        </motion.p>
      </div> */}
    </div>
  );
}
