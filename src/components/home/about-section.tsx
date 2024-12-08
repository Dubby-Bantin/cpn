import Image from "next/image";
import React from "react";
import coWorkers from "../../assets/image/co-workers.jpg";
import teamHands from "../../assets/image/pexels-fauxels-3184418.jpg";

type AboutOption = {
  num: number;
  numMod?: string;
  text: string;
  color: string;
};
export default function AboutSection() {
  const aboutOptions: AboutOption[] = [
    { num: 3, text: "Years Of Experience", color: "4AC083" },
    { num: 860, numMod: "+", text: "Positive Reviews", color: "926EE2" },
    { num: 100, numMod: "K", text: "Trusted Students", color: "F49D49" },
    { num: 23, text: "Active Institution", color: "60a5fa" },
  ];

  return (
    <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className="flex flex-col gap-10 bg-white rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-[14px] font-semibold">About Us</h2>
            <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-t  from-blue-500 to-indigo-900">
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
          height={480}
          className="rounded-2xl w-full object-cover h-[320px]"
        />
      </div>
      <div className="grid grid-cols-1 gap-5">
        <Image
          src={coWorkers}
          alt="About Center Point Network LTD"
          height={480}
          className="rounded-2xl w-full object-cover h-[350px]"
        />
        <div className="grid grid-cols-2 place-content-center gap-5 p-7 h-[300px] rounded-2xl bg-white shadow-2xl">
          {aboutOptions.map(({ text, num, numMod, color }, i) => (
            <div key={i} className="flex h-[100px] bg-slate-100">
              <div
                style={{ backgroundColor: `#${color}` }}
                className={`w-1 h-full`}
              />
              <div className="flex flex-col gap-1 p-3 md:p-5">
                <h2 className="text-[16px] md:text-[23px] font-semibold">
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
