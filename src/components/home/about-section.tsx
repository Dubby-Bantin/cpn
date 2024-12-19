import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      style={{
        background:
          "linear-gradient(95.08deg, #f1fcfd 3.92%, #fbfdf1 57.81%, #e9f6fb 99.18%)",
      }}
      className="gap-7 py-20 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-white to-[#f5f5f5]"
    >
      <div className="flex flex-col gap-[40px] p-5 md:p-[50px]">
        <div className="flex flex-col">
          <div className="text-[36px] font-semibold w-fit">
            <span className="mr-2 bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-transparent">
              What
            </span>
            we do
          </div>
          <div className="h-[8px] w-[100px] bg-blue-500 rounded-md"></div>
        </div>
        <p className="text-[15px]">
          At Center Point Network Ltd., we specialize in delivering cutting-edge
          IT and network solutions tailored to empower businesses. Our expertise
          spans IT infrastructure and security management, web development,
          consultancy, SEO, online reputatio management, and corporate training.
        </p>
        <p className="text-[15px]">
          By enhancing operational efficiency, driving innovation, and fostering
          growth, we help organizations achieve their goals and thrive in a
          competitive digital landscape. Let me know if you&apos;d like this
          tailored further!
        </p>
      </div>
      <div className="relative flex justify-center items-center p-5 md:p-[50px]">
        <div className="absolute -top-16 right-0">
          <Image
            width={500}
            height={500}
            src="https://www.outsourceglobal.com/home/wwd-shapes.svg"
            alt="shape"
            className="w-[400px]"
          />
        </div>
        <Image
          width={500}
          height={500}
          src="/images/co-workers.jpg"
          alt="what-we-do image"
          className="relative rounded-2xl w-full h-[320px] object-cover"
        />
      </div>
    </div>
  );
}
