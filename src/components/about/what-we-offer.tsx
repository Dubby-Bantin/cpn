import React from "react";
import { SparklesCore } from "../ui/sparkles";

const LeftSection = () => (
  <div className="left-section md:w-1/2">
    <h1 className="mb-3 font-semibold text-3xl md:text-4xl">What We Offer</h1>
    <div className="bg-white rounded-sm w-20 h-2" />
    <p className="py-7 text-sm">
      Center Point Network Ltd. offers a comprehensive suite of managed IT
      services designed to provide ongoing support and maintenance for IT
      systems. These services are aimed at ensuring that the client&apos;s IT
      infrastructure operates smoothly and efficiently, allowing them to focus
      on their core business activities.
    </p>
    <p className="py-7 text-sm">
      We are committed to meeting the information technology needs of our
      clients by providing first class and leading-edge technology that
      differentiates us from others. Our business paradigm begins with the
      analysis of the clients’ existing business processes, with the aim of
      bringing the most efficient workflow solutions.
    </p>
  </div>
);

const RightSection = () => (
  <div className="relative right-section shadow-blue-400 shadow-sm px-10 py-20 border border-blue-500 border-opacity-30 rounded-sm w-full md:w-[30rem] overflow-clip">
    <div className="top-0 left-0 absolute w-[40rem] h-20 overflow-clip">
      {/* Gradients */}
      <div className="top-0 absolute inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm w-3/4 h-[2px]" />
      <div className="top-0 absolute inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-3/4 h-px" />
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className="[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] absolute inset-0 bg-primary2 w-full h-full"></div>
    </div>
    <p className="z-[999]">
      We are fully committed to empowering women to develop the skills,
      knowledge and financial status necessary to elevate their standard of
      living. We also focus on recruiting economically and physically challenged
      individuals through our job hub, bringing them into a competitive,
      career-focused workforce.
    </p>
  </div>
);

const WhatWeOffer = () => {
  return (
    <div className="relative flex justify-center items-center py-10 h-fit container">
      <div className="flex flex-col justify-center items-center gap-10 bg-primary2 rounded-2xl px-5 md:px-10 py-10 w-full md:w-[90%] h-fit text-white">
        <div className="flex flex-wrap justify-center items-center gap-20 px-3 py-10 w-full h-fit text-white">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
