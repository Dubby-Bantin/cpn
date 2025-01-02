import React from "react";
import { CiClock2, CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about how we specialize in delivering cutting-edge IT and network solutions tailored to empower businesses.",
  openGraph: {
    url: "https://www.cpnltd.com.ng/about",
  },
};
const Contact = () => {
  return (
    <div>
      <div className="grid lg:grid grid-cols-1 lg:grid-cols-2 shadow-[0_0_20px_rgba(128,128,128,0.33)] m-0 lg:mx-12 lg:mt-12 p-5 lg:p-12">
        <div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="font-light text-[30px]">Address</p>
            <div className="flex items-center gap-1">
              <CiLocationOn className="text-[25px]" />
              <p className="text-gray-500">
                725 5th Ave, New York, NY 10022, USA
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="font-light text-[30px]">Phones</p>
            <div className="flex items-center gap-1">
              <PiPhoneThin className="text-[25px]" />
              <p className="text-gray-500">712-339-9294</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="font-light text-[30px]">Email Address</p>
            <div className="flex items-center gap-1">
              <CiMail className="text-[25px]" />
              <Link className="text-gray-500" href="mailto:info@cpnltd.com.ng">
                info@cpnltd.com.ng
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="font-light text-[30px]">Working Hours</p>
            <div className="flex items-center gap-1">
              <CiClock2 className="text-[25px]" />
              <p className="text-gray-500">Mon-Fri: 10:00 - 18:00</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="font-light text-[30px]">Follow Us</p>
            <div className="flex items-center gap-5">
              <FaFacebook className="text-[25px]" />
              <FaInstagram className="text-[25px]" />
              <FaYoutube className="text-[25px]" />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-10 font-light text-[30px]">Send Your Question</p>
          <form>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="border-gray-400 bg-transparent px-5 border h-[50px] text-[18px] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                className="border-gray-400 bg-transparent px-5 border h-[50px] text-[18px] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                cols={50}
                rows={10}
                className="border-gray-400 bg-transparent p-4 border text-[18px] outline-none"
              ></textarea>
            </div>
            <button className="bg-transparent px-5 border border-black w-full h-[50px] text-[18px] cursor-pointer outline-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
