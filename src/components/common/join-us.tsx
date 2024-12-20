import React from "react";
import { Button } from "../ui/button";
import { MailOpen } from "lucide-react";

const JoinUs = () => {
  return (
    <div className="flex justify-between items-center gap-3 bg-[#051322] px-20 p-5 rounded-lg h-[20rem]">
      <div className="md:w-1/2 text-white">
        <h1 className="mb-5 font-semibold text-5xl">
          Ready to partner <span className="text-blue-400">with</span> us?
        </h1>
        <div className="bg-white rounded-sm w-[7rem] h-3" />
      </div>
      <div className="flex flex-col items-start gap-10 w-1/2">
        <small className="text-white">
          Grow your business while reducing operational cost and time and
          keeping the core business focus in-house.
        </small>
        <Button
          variant={"outline"}
          size={"lg"}
          className="flex items-center gap-5"
        >
          {" "}
          <MailOpen />
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default JoinUs;
