import FAQSection from "@/components/common/FAQS";
import JoinUs from "@/components/common/join-us";
import { Button } from "@/components/ui/button";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col gap-20 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between px-10 md:px-0 items-start w-full h-full">
        <div className="flex flex-col items-start gap-5 py-20">
          <h1 className="font-semibold text-5xl">
            What We Can Provide <span className="text-primary2">For You</span>{" "}
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

      <JoinUs />
    </div>
  );
};

export default Services;
