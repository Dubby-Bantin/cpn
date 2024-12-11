import Image from "next/image";
import React from "react";
import coWorkers from "../../../public/images/WhatsApp Image 2024-12-10 at 06.58.40_2434b008.jpg";
import teamHands from "../../../public/images/pexels-fauxels-3184418.jpg";
import { aboutOptions } from "@/lib/constants";

export default function AboutSection() {
  return (
    <div className="gap-7 grid grid-cols-1 md:grid-cols-2 my-5">
      <div className="flex flex-col gap-10 bg-white shadow-2xl p-6 rounded-2xl">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-[14px]">About Us</h2>
            <h1 className="bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-3xl text-transparent">
              Empowering Businesses with Innovative IT Solutions
            </h1>
          </div>
          <p className="text-[14px]">
            Center Point Network LTD is an IT solutions company dedicated to
            delivering cutting-edge technology for diverse clients, including
            government, corporations, SMEs, and retail. We specialize in
            optimizing business workflows through tailored technology solutions,
            combining innovation, operations, and customer-centric strategies to
            meet your unique needs.
          </p>
        </div>
        <Image
          src={teamHands}
          alt="About Center Point Network LTD"
          height={500}
          width={500}
          layout="responsive"
          quality={100}
          className="rounded-2xl w-full h-[320px] object-cover"
        />
      </div>
      <div className="gap-5 grid grid-cols-1">
        <div className="relative w-full h-[30rem] overflow-clip">
          <Image
            src={coWorkers}
            alt="About Center Point Network LTD"
            className="rounded-2xl object-cover"
            layout="fill"
          />
        </div>
        <div className="place-content-center gap-5 grid grid-cols-2 bg-white shadow-2xl p-7 rounded-2xl h-[300px]">
          {aboutOptions.map(({ text, num, numMod, color }, i) => (
            <div key={i} className="flex bg-slate-100 h-[100px]">
              <div
                style={{ backgroundColor: `#${color}` }}
                className={`w-1 h-full`}
              />
              <div className="flex flex-col gap-1 p-3 md:p-5">
                <h2 className="font-semibold text-[16px] md:text-[23px]">
                  {num}
                  {numMod}
                </h2>
                <p className="text-[14px]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
