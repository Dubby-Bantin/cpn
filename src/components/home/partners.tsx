import { partners } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center py-5">
        <div className="w-fit font-semibold text-[36px]">
          Our
          <span className="bg-clip-text bg-gradient-to-t from-primary3 to-primary2 ml-3 font-semibold text-transparent">
            Partners
          </span>
        </div>
        <div className="bg-primary2 rounded-md w-[100px] h-[8px]"></div>
      </div>
      <section className="flex flex-col gap-10 p-5 md:p-[50px]">
        <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
          {partners.map((img, i) => (
            <Image
              key={i}
              width={100}
              height={100}
              src={img}
              alt="logos"
              className="w-[8rem]"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
