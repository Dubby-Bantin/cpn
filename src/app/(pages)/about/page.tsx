import WhoWeAre from "@/components/about/who-we-are";
import Image from "next/image";
import OurCulture from "@/components/about/culture";
import WhatWeOffer from "@/components/about/what-we-offer";
import JoinUs from "@/components/common/join-us";
import Values from "@/components/about/values";
const About = () => {
  return (
    <div className="w-full">
      <div className="relative flex md:flex-row flex-col justify-between items-center gap-10 md:gap-20 px-6 md:px-20 py-10 w-full md:h-[30rem]">
        <div className="flex flex-col items-center md:items-start gap-6 md:w-3/5 text-center md:text-left">
          <h1 className="font-semibold text-3xl md:text-5xl leading-snug md:leading-tight">
            Committed to{" "}
            <span className="text-blue-500">growing your business</span> with
            incremental partnerships
          </h1>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed">
            We are the first ISO-compliant commercial delivery center in West
            Africa, and the first Nigerian international contact center serving
            the US, UK, and Japan markets.
          </p>
        </div>

        <div className="relative flex justify-center items-center gap-6">
          <div className="relative top-20 border-4 shadow-lg border-blue-500 rounded-full w-[15rem] h-[15rem]">
            <Image
              src="https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team collaboration at work"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          <div className="relative -top-10 border-4 shadow-lg border-blue-500 rounded-full w-[15rem] h-[15rem]">
            <Image
              src="/images/co-workers.jpg"
              alt="Team discussion in progress"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <OurCulture />
      <WhoWeAre />
      <WhatWeOffer />
      <Values />
      <div className="px-20 py-10">
        <JoinUs />
      </div>
    </div>
  );
};

export default About;
