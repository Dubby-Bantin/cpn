"use client";
import React from "react";
import { motion } from "motion/react";

export default function MissionVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[57%_43%] gap-5 md:gap-0 mt-10 bg-white">
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: -200 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="hidden md:flex bg-[#f5f5f5] flex-col justify-center px-4 gap-5 items-center left__shape h-[350px]"
      >
        <h1 className="text-center bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-2xl text-transparent">
          Our Mission
        </h1>
        <div className="w-fit">
          To empower individuals and organizations through <br /> innovative IT
          solutions, providing access to cutting-edge <br /> technology,
          education, and resources that foster growth, <br /> bridge the skills
          gap, and drive sustainable development <br /> in communities.
        </div>
      </motion.div>
      <div
        className="flex md:hidden bg-[#f5f5f5] flex-col justify-center px-4 gap-5 items-center rounded-md h-[350px]"
      >
        <h1 className="text-center bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-2xl text-transparent">
          Our Mission
        </h1>
        <div className="w-fit">
          To empower individuals and organizations through <br /> innovative IT
          solutions, providing access to cutting-edge <br /> technology,
          education, and resources that foster growth, <br /> bridge the skills
          gap, and drive sustainable development <br /> in communities.
        </div>
      </div>
      <div className="flex bg-[#f5f5f5] md:bg-transparent rounded-md md:rounded-none flex-col justify-center px-4 gap-5 items-center h-[350px]">
        <h1 className="text-center bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-2xl text-transparent">
          Our Vision
        </h1>
        <div className="fit">
          To be a global leader in IT empowerment, transforming <br /> lives and
          communities by leveraging technology <br /> to unlock potential,
          create opportunities, and build a future where <br /> everyone thrives
          regardless of their background.
        </div>
      </div>
    </div>
  );
}
