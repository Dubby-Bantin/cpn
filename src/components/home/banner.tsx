"use client";

import { images } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import VideoPlayer from "../common/VideoPlayer";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-[430px] md:h-screen overflow-hidden">
      <div className="z-10 absolute inset-0 bg-black/60" />

      <VideoPlayer
        video={
          "https://media.istockphoto.com/id/1474198714/video/global-digital-grid-growing-over-earth-looped-net-3d-animation-ai-neural-networks-covering.mp4?s=mp4-640x640-is&k=20&c=zU_cA1DvL9PLx1TMM1p0A_mlbTSciufs1zf9G7R-3No="
        }
      />

      <div className="z-20 absolute inset-0 flex flex-col justify-center items-center gap-4 px-10 text-center text-white">
        <motion.h1
          key={`header-${currentIndex}`}
          className="md:w-1/2 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {images[currentIndex]?.headerText}
        </motion.h1>
        <motion.p
          key={`paragraph-${currentIndex}`}
          className="md:w-1/2 font-bold text-md md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {images[currentIndex]?.paragraphText}
        </motion.p>
      </div>
    </div>
  );
}
