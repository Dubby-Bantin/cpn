import React from "react";
import { CiClock2, CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/contact/contactForm";

const Contact = () => {
  return (
    <div>
      <div className="grid grid-cols-1 p-5 shadow-[0_0_20px_rgba(128,128,128,0.33)] m-0 lg:grid lg:grid-cols-2 lg:p-12 lg:mt-12 lg:mx-12">
        <div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="text-[30px] font-light">Address</p>
            <div className="flex items-center gap-1">
              <CiLocationOn className="text-[25px]" />
              <p className="text-gray-500">
                Plot 658/659 Arab Roa , Kubwa, Abuja.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="text-[30px] font-light">Phones</p>
            <div className="flex items-center gap-1">
              <PiPhoneThin className="text-[25px]" />
              <p className="text-gray-500">+2348169658898</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="text-[30px] font-light">Email Address</p>
            <div className="flex items-center gap-1">
              <CiMail className="text-[25px]" />
              <Link className="text-gray-500" href="mailto:info@cpnltd.com.ng">
                info@cpnltd.com.ng
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="text-[30px] font-light">Working Hours</p>
            <div className="flex items-center gap-1">
              <CiClock2 className="text-[25px]" />
              <p className="text-gray-500">Mon-Fri: 9:00AM - 5:00PM</p>
            </div>
          </div>
          {/* <div className="flex flex-col gap-4 mb-14">
            <p className="text-[30px] font-light">Follow Us</p>
            <div className="flex items-center gap-5">
              <FaFacebook className="text-[25px]" />
              <FaInstagram className="text-[25px]" />
              <FaYoutube className="text-[25px]" />
            </div>
          </div> */}
        </div>
        <div>
          <p className="text-[30px] font-light mb-10">Send Your Question</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
