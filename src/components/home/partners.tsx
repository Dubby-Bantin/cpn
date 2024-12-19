import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center py-5">
        <div className="text-[36px] font-semibold w-fit">
          Our
          <span className="ml-3 bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-transparent">
            Partners
          </span>
        </div>
        <div className="h-[8px] w-[100px] bg-blue-500 rounded-md"></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 w-[80%]">
          <Image
            width={500}
            height={500}
            src="/images/hp-logo.png"
            alt="hp logo"
            className="w-[150px] rounded-lg"
          />
          <Image
            width={500}
            height={500}
            src="/images/cisco-logo.png"
            alt="hp logo"
            className="w-[150px] rounded-lg"
          />
          <Image
            width={500}
            height={500}
            src="/images/lenovo-logo.png"
            alt="hp logo"
            className="w-[150px] rounded-lg"
          />
          <Image
            width={500}
            height={500}
            src="/images/dell-logo.png"
            alt="hp logo"
            className="w-[150px] rounded-lg"
          />
          <Image
            width={500}
            height={500}
            src="/images/oracle-logo.png"
            alt="hp logo"
            className="w-[150px] rounded-lg"
          />
          <Image
            width={500}
            height={500}
            src="/images/ibm-logo.png"
            alt="hp logo"
            className="w-[150px] rounded-lg"
          />
          <Image
            width={500}
            height={500}
            src="/images/mircosoft-logo.png"
            alt="hp logo"
            className="w-[150px] rounded-lg"
          />
          <Image
            width={500}
            height={500}
            src="/images/sky-logo.png"
            alt="hp logo"
            className="w-[150px] rounded-lg"
          />
          <Image
            width={500}
            height={500}
            src="/images/vmware-logo.png"
            alt="hp logo"
            className="w-[150px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
