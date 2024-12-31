import React from "react";
import { Button } from "../ui/button";
import { MailOpen } from "lucide-react";
import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center gap-3 bg-[#051322] md:px-20 py-10 md:py-0 p-5 min-h-[20rem]">
      <div className="w-full md:w-1/2 text-white">
        <h1 className="mb-5 font-semibold text-3xl md:text-5xl">
          Ready to partner <span className="text-primary2">with</span> us?
        </h1>
        <div className="bg-white rounded-sm w-[7rem] h-3" />
      </div>
      <div className="flex flex-col items-start gap-10 w-full md:w-1/2">
        <small className="text-white">
          Grow your business while reducing operational cost and time and
          keeping the core business focus in-house.
        </small>
        <Link href="mailto:info@cpnltd.com.ng">
          <Button
            variant={"outline"}
            size={"lg"}
            className="flex items-center gap-5"
          >
            {" "}
            <MailOpen />
            Get In Touch
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JoinUs;
