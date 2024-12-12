import FAQSection from "@/components/common/FAQS";
import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col gap-20 px-20 p-10">
      <div className="flex justify-between items-start w-full h-full">
        <div className="flex flex-col items-start gap-5 py-20">
          <h1 className="font-semibold text-5xl">
            What We Can Provide <span className="text-blue-500">For You</span>{" "}
          </h1>
          <p className="">
            At Outsource Global, we have deep vertical expertise and a unique
            understanding of industry-specific needs.
          </p>

          <Button variant={"outline"} size={"lg"}>
            Contact us
          </Button>
        </div>
        <FAQSection />
      </div>

      <div className="flex justify-between items-center gap-3 bg-[#051322] px-20 p-5 rounded-lg h-[20rem]">
        <div className="w-1/2 text-white">
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
    </div>
  );
};

export default Services;
