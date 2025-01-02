import React from "react";
import { CiClock2, CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/contactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Send Your Question.",
  openGraph: {
    url: "https://www.cpnltd.com.ng/contact",
  },
};

const Contact = () => {
  return (
    <div className="mx-auto container">
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 shadow-md lg:mx-12 lg:mt-12 p-5 lg:p-12">
        {/* Left Section */}
        <div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="font-light text-[30px]">Address</p>
            <address className="flex items-center gap-2 not-italic">
              <CiLocationOn className="text-[25px]" />
              <p className="text-gray-500">
                Plot 658/659 Arab Road, Kubwa, Abuja.
              </p>
            </address>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="font-light text-[30px]">Phones</p>
            <div className="flex items-center gap-2">
              <PiPhoneThin className="text-[25px]" />
              <p className="text-gray-500">+2348169658898</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="font-light text-[30px]">Email Address</p>
            <div className="flex items-center gap-2">
              <CiMail className="text-[25px]" />
              <Link href="mailto:info@cpnltd.com.ng" className="text-gray-500">
                info@cpnltd.com.ng
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="font-light text-[30px]">Working Hours</p>
            <div className="flex items-center gap-2">
              <CiClock2 className="text-[25px]" />
              <p className="text-gray-500">Mon-Fri: 9:00AM - 5:00PM</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <p className="mb-10 font-light text-[30px]">Send Your Question</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
