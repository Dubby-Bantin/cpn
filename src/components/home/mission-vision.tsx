import React from "react";

export default function MissionVision() {
  return (
    <div className="grid grid-cols-[57%_43%] mt-10">
      <div className="flex flex-col gap-5 items-center left__shape h-[400px]">
        <h1 className=" text-center bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-2xl text-transparent">
          Our Mission
        </h1>
        <div className="w-fit">
          To empower individuals and organizations through innovative IT <br />
          solutions, providing access to cutting-edge technology, education, and <br />
          resources that foster growth, bridge the skills gap, and drive <br />
          sustainable development in communities.
        </div>
      </div>
      <div className="h-[400px] ">
        <h1 className="text-center bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-2xl text-transparent">
          Our Vision
        </h1>
      </div>
    </div>
  );
}
