import FAQSection from "@/components/common/FAQS";
import JoinUs from "@/components/common/join-us";
import { Button } from "@/components/ui/button";
import React from "react";
import { LiaKeySolid, LiaToolsSolid } from "react-icons/lia";
import { FaFolderOpen, FaLock } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { PiDeviceRotateThin, PiFileMagnifyingGlassThin } from "react-icons/pi";
import { MdOutlineShowChart, MdOutlinePhonelinkSetup } from "react-icons/md";
import { GiBookmark } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import { IoBugSharp } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";
import { FaChalkboardUser } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import Image from "next/image";
const Services = () => {
  return (
    <div className="flex flex-col gap-20 md:px-20 py-10">
      <div className="flex md:flex-row flex-col justify-between items-start px-10 md:px-0 w-full h-full">
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

      <section className="overflow-hidden">
        <div className="flex sm:flex-row flex-col justify-center items-center">
          <div className="sm:mb-20 sm:ml-16 p-5 text-center sm:text-left">
            <h1 className="mb-6 font-semibold text-3xl text-center text-primary2 lg:text-4xl lg:text-left lg:leading-[4rem]">
              Enterprise Infrastructure
            </h1>
            <div className="border-primary2 mb-2 border w-28"></div>
            <p className="mb-5 text-sm">
              To create the infrastructure that will deliver content to the
              right place at the right time and budget
            </p>
            <ul className="gap-2 grid mb-10 text-gray-700 text-sm list-disc">
              <li>
                Systems integrated and security to protect the integrity and
                privacy of shared content across network
              </li>
              <li>
                High-end and mid range enterprise server installation and
                configuration
              </li>
              <li>Small business and start-up computing need</li>
            </ul>
            <div className="flex sm:flex-row flex-col items-center">
              <div className="flex flex-col items-center w-96 text-center">
                <MdOutlineShowChart className="mb-3 text-2xl" />
                <p className="mb-3 text-primary2 text-xl">
                  Network Infrastructure
                </p>
                <p className="text-gray-700 text-sm">
                  CPMS builds networks that meet clients’ demand for the
                  structure of extra components which are not strictly necessary
                  to functions in case of failure in other components.
                </p>
              </div>
              <div className="flex flex-col items-center w-96 text-center">
                <MdOutlinePhonelinkSetup className="mb-3 text-2xl" />
                <p className="mb-3 text-primary2 text-xl">
                  Wireless and Mobile Connectivity
                </p>
                <p className="text-gray-700 text-sm">
                  Business is no longer stationary, and therefore enabling
                  wireless access to business resources on/off site has become
                  extremely important part of business requirement.
                </p>
              </div>
            </div>
          </div>
          <Image
          height={500}
          width={500}
            src={
              "https://cpms.com.ng/wp-content/uploads/2020/09/33801-2048x2048.jpg"
            }
            alt=""
            className="h-[30rem] object-contain"
          />
        </div>

        <div className="bg-primaryBlue/10 mb-10 py-20 p-5">
          <div className="flex sm:flex-row flex-col justify-center items-center gap-40 text-center sm:text-left">
            <div>
              <Image
              height={500}
              width={500}
                src={
                  "https://cpms.com.ng/wp-content/uploads/2020/09/2650106-2048x1269.jpg"
                }
                alt=""
                className="h-[15rem] object-contain"
              />
            </div>
            <div className="">
              <h1 className="mb-6 font-semibold text-3xl text-center text-primary2 lg:text-4xl lg:text-left lg:leading-[4rem]">
                Enterprise Infrastructure
              </h1>
              <div className="border-primary2 mb-2 border w-28"></div>
              <p className="mb-5 text-sm">
                We have competency in the deployment and management of the
                following solutions
              </p>
              <ul className="gap-2 grid mb-10 text-gray-700 text-sm list-disc">
                <li className="">Corporate PBX</li>
                <li className="">
                  Email Collaboration (Microsoft Exchange Mail and Open Source
                  Mail e.g. Scalix)
                </li>
                <li className="">VOIP (Voice Over IP Telephony)</li>
                <li className="">Portal Servers and Services</li>
                <li className="">Video Conferencing System</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start gap-40 mb-10 p-5">
          <div className="flex sm:flex-row flex-col items-center w-[70rem]">
            <div className="relative -top-16">
              <h1 className="my-10 mb-6 font-semibold text-3xl text-center text-primary2 lg:text-4xl lg:text-left lg:leading-[4rem]">
                Data Center Solution
              </h1>
              <div className="border-primary2 mb-2 border w-28"></div>
              <p className="text-gray-700 text-sm">
                Data Center Infrastructures are physical or virtual
                infrastructure used by enterprises to house computer, server and
                networking systems and other vectors acting in different
                directions which are together equivalent for company’s
                information technology (IT) needs, which typically involve
                storing, processing and serving large amount of mission-critical
                data to clients in a client/server construction
              </p>
            </div>
            <Image
            height={500}
            width={500}
              src={
                "https://cpms.com.ng/wp-content/uploads/2020/09/38451-2048x2048.jpg"
              }
              alt=""
              className="h-[30rem] object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center gap-40 bg-primaryBlue/10 mb-10 py-20 p-5">
          <div className="flex sm:flex-row flex-col justify-center items-start gap-20 w-[70rem]">
            <Image
            height={500}
            width={500}
              src={
                "https://cpms.com.ng/wp-content/uploads/2020/09/38451-2048x2048.jpg"
              }
              alt=""
              className="h-[15rem] object-contain"
            />
            <div className="relative -top-25">
              <h1 className="mb-6 font-semibold text-3xl text-center text-primary2 lg:text-4xl lg:text-left lg:leading-[4rem]">
                IP Surveillance
              </h1>
              <div className="border-primary2 mb-2 border w-28"></div>
              <div className="gap-5 grid text-gray-700 text-sm">
                <p>
                  The digital network video surveillance system provides a host
                  of benefits and advanced purposes that cannot be provided by
                  an analogue video surveillance system.
                </p>
                <p>
                  Center Point Multi Solutions provides a complete solution of
                  IP cameras, easy to access, secure storage and is a strong and
                  healthy network switching. We shall provide switches that
                  offer what is needed for a robust network.
                </p>
                <p>
                  In addition, our IP Surveillance solution is fully resilient
                  to and secured from hacking.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start gap-40 mb-10 p-5">
          <div className="flex sm:flex-row flex-col items-center w-[70rem]">
            <div className="relative">
              <h1 className="mb-6 font-semibold text-3xl text-center text-primary2 lg:text-4xl lg:text-left lg:leading-[4rem]">
                Cloud Computing
              </h1>
              <div className="border-primary2 mb-2 border w-28"></div>
              <p className="text-gray-700 text-sm">
                Cloud Computing is a general term for any activity that involves
                delivering hosted services over the internet. These services are
                roadly divided into three categories:
                Infrastructure-as-a-service (IaaS), Platform-as-a-Service (PaaS)
                and Software-as-a-Service (SaaS).
              </p>
              <p className="text-gray-700 text-sm">
                Cloud computing enables companies to consume computer resources
                as a utility just like electricity rather than having to build
                and maintain computing infrastructures in-house. It provides
                sufficient cost effective IT resources as cost on demand IT
                based on the actual usage of the customer.
              </p>
            </div>
            <Image
            height={500}
            width={500}
              src={
                "https://cpms.com.ng/wp-content/uploads/2020/09/3315-480x291.jpg"
              }
              alt=""
              className="h-[20rem] object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center items-start gap-40 mb-40 p-5">
          <div className="flex sm:flex-row flex-col items-center gap-10 w-[75rem]">
            <div className="relative">
              <h1 className="mb-6 font-semibold text-3xl text-center text-primary2 lg:text-4xl lg:text-left lg:leading-[4rem]">
                Business Ready Solutions
              </h1>
              <div className="border-primary2 mb-5 border w-28"></div>

              <div className="gap-20 grid grid-cols-3">
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <BsBarChartLine className="mb-7 text-4xl text-primary2" />
                  E-Commerce Solutions
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <FaFolderOpen className="mb-7 text-4xl text-primary2" />
                  ERP Solutions
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <FaChalkboardUser className="mb-7 text-4xl text-primary2" />
                  Management Software
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <GoPerson className="mb-7 text-4xl text-primary2" />
                  CRM Solutions
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <GiBookmark className="mb-7 text-4xl text-primary2" />
                  Content Management System
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <FaPeopleCarry className="mb-7 text-4xl text-primary2" />
                  Corporate Training Solutions
                </div>
              </div>
            </div>
            <Image
            height={500}
            width={500}
              src={
                "https://cpms.com.ng/wp-content/uploads/2020/09/19265-480x348.jpg"
              }
              alt=""
              className="h-[20rem] object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center items-start gap-40 bg-primaryBlue/10 mb-40 p-5">
          <div className="flex sm:flex-row flex-col items-center gap-10 w-[75rem]">
            <Image
            height={500}
            width={500}
              src={
                "https://cpms.com.ng/wp-content/uploads/2020/09/18941-480x361.jpg"
              }
              alt=""
              className="h-[20rem] object-contain"
            />
            <div className="relative">
              <h1 className="mb-6 font-semibold text-3xl text-center text-primary2 lg:text-4xl lg:text-left lg:leading-[4rem]">
                Business Ready Solutions
              </h1>
              <div className="border-primary2 mb-5 border w-28"></div>

              <div className="gap-20 grid grid-cols-3">
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <LiaToolsSolid className="mb-7 text-4xl text-primary2" />
                  Server Management, Monitoring and Security
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <FaLock className="mb-7 text-4xl text-primary2" />
                  Firewall Security Solution
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <LiaKeySolid className="mb-7 text-4xl text-primary2" />
                  Penetration Testing
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <CiBasketball className="mb-7 text-4xl text-primary2" />
                  Web Service Assessment
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <PiFileMagnifyingGlassThin className="mb-7 text-4xl text-primary2" />
                  Source Code Audit
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <PiDeviceRotateThin className="mb-7 text-4xl text-primary2" />
                  Security Architecture Review
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-center text-lg">
                  <IoBugSharp className="mb-7 text-4xl text-primary2" />
                  Vulnerability Assessment
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-40 mb-10 py-20 p-5">
          <div className="flex sm:flex-row flex-col justify-center sm:items-start gap-20 w-[70rem]">
            <div className="relative -top-25">
              <h1 className="mb-6 font-semibold text-3xl text-center text-primary2 lg:text-4xl lg:text-left lg:leading-[4rem]">
                IT Power Solutions
              </h1>
              <div className="mb-2 border border-blue-500 w-28"></div>
              <div className="gap-5 grid text-gray-700 text-sm">
                <p>
                  A reliable uninterrupted power supply is non-negotiable for IT
                  infrastructure. We understand that time is paramount,
                  especially when it comes to eliminating downtime and
                  maximizing the life of your backup power solution.
                </p>
                <p>
                  Our IT power solution shall be tailored to fit your company’s
                  unique requirements and infrastructure. We take proactive
                  approach from selection and implementation to maintenance and
                  upkeep
                </p>
              </div>
            </div>
            <Image
            height={500}
            width={500}
              src={
                "https://cpms.com.ng/wp-content/uploads/2020/09/Capture6-e1600421594258.jpg"
              }
              alt=""
              className="h-[15rem] object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center gap-40 bg-primaryBlue/20 mb-10 py-20 p-5">
          <div className="flex sm:flex-row flex-col justify-center sm:items-start gap-20 w-[70rem]">
            <Image
            height={500}
            width={500}
              src={
                "https://cpms.com.ng/wp-content/uploads/2020/09/5514-480x300.jpg"
              }
              alt=""
              className="h-[15rem] object-contain"
            />
            <div className="relative -top-25">
              <h1 className="mb-6 font-semibold text-3xl text-center text-primary2 lg:text-4xl lg:text-left lg:leading-[4rem]">
                Corporate Training
              </h1>
              <div className="border-primary2 mb-2 border w-28"></div>
              <div className="text-gray-700 text-sm">
                <p>
                  Any solution provided becomes obsolete if it doesn’t impact
                  your primary objective – YOUR BUSINESS OUTCOMES. To mention a
                  few, whether it’s maximizing the productivity of your
                  employees or improving the quality and capabilities of company
                  personnel, all our interventions have one common DNA i.e.
                  impacting business outcome. Over the years, Center Point Multi
                  Solutions Limited has championed the art of impacting business
                  of global clients across multiple sectors through its
                  customized IT security training programs. Our corporate
                  training programs provide holistic solutions related to
                  networking and security and we are committed to a philosophy
                  of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JoinUs />
    </div>
  );
};

export default Services;
