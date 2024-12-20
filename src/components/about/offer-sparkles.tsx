"use client";
import { SparklesCore } from "../ui/sparkles";

export function OfferSparkles() {
  return (
    <div className="flex flex-col justify-center items-center rounded-md w-full overflow-hidden">
      <h1 className="relative z-20 font-bold text-2xl text-center text-white md:text-7xl lg:text-4xl">
        What We Offer
      </h1>
      <div className="relative w-[40rem] h-40">
        {/* Gradients */}
        <div className="top-0 absolute inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm w-3/4 h-[2px]" />
        <div className="top-0 absolute inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-3/4 h-px" />
        <div className="top-0 absolute inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm w-1/4 h-[5px]" />
        <div className="top-0 absolute inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent w-1/4 h-px" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] absolute inset-0 bg-darkBlue w-full h-full"></div>
      </div>
    </div>
  );
}
