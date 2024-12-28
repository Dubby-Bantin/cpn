import React from "react";
import { CiClock2, CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

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
                725 5th Ave, New York, NY 10022, USA
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="text-[30px] font-light">Phones</p>
            <div className="flex items-center gap-1">
              <PiPhoneThin className="text-[25px]" />
              <p className="text-gray-500">712-339-9294</p>
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
              <p className="text-gray-500">Mon-Fri: 10:00 - 18:00</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-14">
            <p className="text-[30px] font-light">Follow Us</p>
            <div className="flex items-center gap-5">
              <FaFacebook className="text-[25px]" />
              <FaInstagram className="text-[25px]" />
              <FaYoutube className="text-[25px]" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[30px] font-light mb-10">Send Your Question</p>
          <form>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="h-[50px] bg-transparent border border-gray-400 outline-none text-[18px] px-5"
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                className="h-[50px] bg-transparent border border-gray-400 outline-none text-[18px] px-5"
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                cols={50}
                rows={10}
                className="p-4 bg-transparent border border-gray-400 outline-none text-[18px]"
              ></textarea>
            </div>
            <button className="h-[50px] bg-transparent border border-black outline-none text-[18px] w-full px-5 cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
