import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { SparklesCore } from "../ui/sparkles";
import { sectors } from "@/lib/constants";

const LeftSection = () => (
  <div className="left-section md:w-1/2">
    <h1 className="mb-3 font-semibold text-3xl md:text-4xl">What We Offer</h1>
    <div className="bg-white rounded-sm w-20 h-2" />
    <p className="py-10 text-sm">
      We provide first-class contact center services from our ultramodern
      facilities in Abuja, Kaduna and Lagos. Our services are tailored to
      perfectly suit our clients’ needs and preferences, with a focus on service
      quality, low-cost and scalable solutions.
    </p>
    <p className="py-10 text-sm">
      We help our clients become operationally efficient and competitive. We
      have created over 1000 direct graduate jobs for customer care executives,
      sales, marketing, tech, accounting, legal practitioners and medical
      professionals serving the global market. Outsource Global seeks to
      positively impact the world of business, by fostering exponential growth.
    </p>
    <p className="py-10 text-sm">
      Outsource Global provides accent localization and training so all our
      agents speak to customers in their respective local accents. Our agents
      join us with the knowledge that we offer solid career paths, ongoing
      training and continuous upskilling, to enable them to evolve from
      telemarketing into specialized, niche services.
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
      <div className="[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] absolute inset-0 bg-darkBlue w-full h-full"></div>
    </div>
    <p className="z-[999]">
      We are fully committed to empowering women to develop the skills,
      knowledge and financial status necessary to elevate their standard of
      living. We also focus on recruiting economically and physically challenged
      individuals, bringing them into a competitive, career-focused workforce.
    </p>
  </div>
);

const SectorList = () => (
  <div className="px- w-[90%]">
    <h2 className="py-3 font-semibold text-2xl">Sectors We Serve</h2>
    <div className="justify-center items-center gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {sectors.map((sector, index) => (
        <p key={index} className="flex items-center gap-5">
          <FaCheckCircle /> {sector}
        </p>
      ))}
    </div>
  </div>
);

const WhatWeOffer = () => {
  return (
    <div className="relative flex justify-center items-center py-10 h-fit container">
      <div className="flex flex-col justify-center items-center gap-10 bg-darkBlue px-10 py-10 w-[90%] h-fit text-white">
        <div className="flex flex-wrap justify-center items-center gap-20 px-3 py-10 w-full h-fit text-white">
          <LeftSection />
          <RightSection />
        </div>
        <SectorList />
      </div>
    </div>
  );
};

export default WhatWeOffer;
