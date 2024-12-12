import React from "react";
import Image from "next/image";

export default function Ceo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
      <div className="flex justify-center w-full">
        <Image
          width={500}
          height={500}
          src="/images/WhatsApp Image 2024-09-17 at 5.27.22 PM.jpeg.jpg"
          alt="Image of Center point CEO"
          quality={100}
          className="rounded-2xl object-cover h-[550px] w-full"
        />
      </div>
      <div className="flex flex-col gap-7 p-4">
        <div>
          <h1 className="text-center bg-clip-text bg-gradient-to-t from-blue-500 to-indigo-900 font-semibold text-3xl text-transparent">
            Message From Our CEO
          </h1>
        </div>
        <div>
          For Nnedinma Obioha, community development is more than a passion—it’s
          a calling. As the leader of CentrePoint Network LTD, she is dedicated
          to empowering Nigerian youth through IT education and training,
          fostering growth, and driving societal change. “Community development
          is key to unlocking the potential of our youth. By equipping them with
          the right skills and resources, we can create positive change-makers,”
          she shared. Her commitment extends to initiatives like charitable
          grants, scholarships, and IT workshops aimed at bridging the skills
          gap in underserved communities. Obioha’s tech journey began in the UK,
          where she earned IT certifications and worked in accounting and
          entrepreneurship. Despite challenges, her passion for using technology
          to transform lives led her to expand her late mother’s computer
          training institution, establishing training centers across West
          Africa. “I believe technology can unlock economic opportunities and
          transform lives. My goal is to empower Nigerian youth and provide
          access to opportunities, regardless of background,” Obioha explained.
          Her efforts continue to drive social change, positioning her as a
          beacon of transformation through technology and education.
        </div>
      </div>
    </div>
  );
}
