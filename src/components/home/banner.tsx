"use client";

import { images } from "@/lib/constants";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
      <div className="z-10 absolute inset-0 bg-black/60" />

      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={`Banner ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="z-20 absolute inset-0 flex flex-col gap-4 justify-center items-center px-10 text-center text-white">
        <motion.h1
          key={`header-${currentIndex}`}
          className="md:w-1/2 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {images[currentIndex].headerText}
        </motion.h1>
        <motion.p
          key={`paragraph-${currentIndex}`}
          className="md:w-1/2 font-bold text-md md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {images[currentIndex].paragraphText}
        </motion.p>
      </div>
    </div>
  );
}
