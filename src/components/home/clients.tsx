import { clients } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export default function Clients() {
  return (
    <div
      style={{
        background:
          "linear-gradient(95.08deg, #f1fcfd 3.92%, #fbfdf1 57.81%, #e9f6fb 99.18%)",
      }}
      className="flex flex-col gap-10 p-5 md:p-[50px]"
    >
      <h1 className="text-[38px]">
        We Have Clients In{" "}
        <span className="bg-clip-text bg-gradient-to-t from-primary3 to-primary2 font-semibold text-transparent">
          All Sectors
        </span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center md:gap-x-[150px]">
        {clients.map(({ text, img }, i) => (
          <div className="flex items-center gap-6 p-6" key={i}>
            <Image width={50} height={50} src={img} alt="logos" className="w-[70px]"/>
            <p className="w-[400px]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
