import { sectors } from "@/lib/constants";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhatWeOffer = () => {
  return (
    <div className="relative flex justify-center items-center py-10 h-fit container">
      <div className="flex flex-col justify-center items-center gap-10 bg-darkBlue px-10 py-10 w-[90%] h-fit text-white">
        <div className="flex flex-wrap justify-center items-center gap-20 px-3 py-10 w-full h-fit text-white">
          <div className="left-section md:w-1/2">
            <h1 className="mb-3 font-semibold text-3xl md:text-4xl">
              Who We Are
            </h1>
            <div className="bg-white rounded-sm w-20 h-2" />
            <p className="py-10 text-sm">
              At Outsource Global, we believe in building partnerships with
              companies worldwide to positively impact the global business
              services and foster exponential growth. This growth can include
              higher-value, multi-processing, specialized services and business
              functions such as Customer service, IT support, software
              development-as-a-service, legal services, Artificial Intelligence,
              medical support services, accounting-as-a-service and data
              management.
            </p>
            <p className="py-10 text-sm">
              By first understanding your business and the functions within the
              organization, we find ways to reduce operational costs and
              increase performance with consistent, quality and reliable service
              delivery.
            </p>
            <p className="py-10 text-sm">
              Our services are tailored to perfectly suit your business needs
              and preferences, with a focus on service quality, low-cost and
              scalable solutions. We help our clients become operationally
              efficient and competitive.
            </p>
          </div>

          <div className="right-section border-input px-10 py-20 border rounded-sm w-full md:w-[30rem]">
            We are fully committed to empowering women to develop the skills,
            knowledge and financial status necessary to elevate their standard
            of living. We also focus on recruiting economically and physically
            challenged individuals, bringing them into a competitive,
            career-focused workforce.
          </div>
        </div>
        <div className="px- w-[90%]">
          <h1 className="py-3 font-semibold text-2xl"> Sectors We Serve</h1>
          <div className="justify-center items-center gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {sectors.map((sector, i) => (
              <p key={i} className="flex items-center gap-5">
                <FaCheckCircle /> {sector}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
