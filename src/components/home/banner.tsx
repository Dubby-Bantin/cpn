"use client";

import { motion } from "framer-motion";
import VideoPlayer from "../common/VideoPlayer";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <div className="relative flex justify-center items-center w-full h-[1000px] md:h-screen overflow-clip">
      {/* <div className="z-10 absolute inset-0 bg-black/60" /> */}

      <VideoPlayer
        className="absolute"
        video={"/videos/Main Comp Map Animation BG Changed.mp4"}
      />
      <div className="relative place-items-center md:gap-[20px] lg:gap-[50px] xl:gap-[250px] grid grid-cols-1 md:grid-cols-2 px-3 md:px-0 w-full md:w-[98%] lg:w-[95%] h-full text-white">
        <div className="flex flex-col items-start gap-10">
          <h1 className="font-bold text-6xl text-gray-700">
            Africa&apos;s Premier{" "}
            <span className="text-primary2">Outsourcing</span> Growth Partner
          </h1>
          <p className="text-gray-900">
            Africa&apos;s Premier Outsourcing Growth Partner We deploy the
            best-in-class technology to meet the unique needs of each of our
            clients. Our solutions are at the cutting edge of contact centre
            business & knowledge process outsourcing.
          </p>
          <Button size={"lg"} className="text-primary3" variant={"outline"}>
            Connect With Us
          </Button>
        </div>
        <div className="gap-4 grid grid-cols-2 w-full h-[90%]">
          <div className="relative gap-4 grid grid-rows-3 h-full">
            <div className="row-span-2 row-start-1 rounded-xl overflow-hidden">
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
                  className="rounded-xl object-cover"
                />
              </motion.div>
            </div>

            <div className="row-span-1 row-start-3 rounded-xl overflow-hidden">
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
                  className="rounded-xl object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="relative gap-4 grid grid-rows-3 h-full">
            <div className="row-span-1 row-start-1 rounded-xl overflow-hidden">
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
                  className="rounded-xl object-cover"
                />
              </motion.div>
            </div>

            <div className="row-span-2 row-start-2 rounded-xl overflow-hidden">
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
                  className="rounded-xl object-cover"
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
