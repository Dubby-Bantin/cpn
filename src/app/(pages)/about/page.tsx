import WhoWeAre from "@/components/about/who-we-are";
import Image from "next/image";
import WhatWeOffer from "@/components/about/what-we-offer";
import JoinUs from "@/components/common/join-us";
import Values from "@/components/about/values";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about how we specialize in delivering cutting-edge IT and network solutions tailored to empower businesses.",
  openGraph: {
    url: "https://www.cpnltd.com.ng/about",
  },
};
const About = () => {
  return (
    <div className="w-full">
      <div className="relative flex md:flex-row flex-col justify-between items-center gap-10 md:gap-20 mb-20 md:mb-0 px-6 md:px-20 py-10 w-full md:h-[30rem]">
        <div className="flex flex-col items-center md:items-start gap-6 md:w-3/5 text-center md:text-left">
          <h1 className="font-semibold text-3xl md:text-4xl leading-snug md:leading-tight">
            Committed to{" "}
            <span className="text-primary2">growing your business</span> with
            incremental partnerships
          </h1>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed">
            Center Point Network LTD delivers innovative IT solutions for
            industries like government, corporate, oil & gas, SMEs, and retail.
            We enhance operations and customer relationships with tailored
            technology, driving excellence and meeting unique client needs.
          </p>
        </div>

        <div className="relative flex justify-center items-center gap-6">
          <div className="relative top-20 border-4 border-primary2 shadow-lg rounded-full w-[12rem] md:w-[15rem] h-[12rem] md:h-[15rem]">
            <Image
              src="https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team collaboration at work"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          <div className="relative -top-10 border-4 border-primary2 shadow-lg rounded-full w-[12rem] md:w-[15rem] h-[12rem] md:h-[15rem]">
            <Image
              src="https://images.pexels.com/photos/14314638/pexels-photo-14314638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team discussion in progress"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <WhoWeAre />
      <WhatWeOffer />
      <Values />
      <JoinUs />
    </div>
  );
};

export default About;
