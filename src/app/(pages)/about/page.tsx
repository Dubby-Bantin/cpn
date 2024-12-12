import WhoWeAre from "@/components/about/who-we-are";
import Image from "next/image";

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
          <div className="relative">
            <Image
              src="/images/co-workers.jpg"
              alt="Team collaboration at work"
              height={300}
              width={300}
              className="relative top-10 border-4 shadow-lg border-blue-500 rounded-full w-[15rem] h-[15rem] object-cover"
            />
          </div>
          <div className="relative -top-10">
            <Image
              src="/images/co-workers.jpg"
              alt="Team discussion in progress"
              height={300}
              width={300}
              className="relative border-4 shadow-lg border-blue-500 rounded-full w-[15rem] h-[15rem] object-cover"
            />
          </div>
        </div>
      </div>

      <WhoWeAre />
    </div>
  );
};

export default About;
