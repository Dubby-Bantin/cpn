import { features } from "@/lib/constants";
import Image from "next/image";
import { Button } from "../ui/button";

const OurCulture = () => {
  return (
    <div className="relative bg-primary-blue px-6 md:px-20 py-16">
      <div className="relative bg-darkBlue px-6 md:px-20 py-16 rounded-tl-[5rem] rounded-br-[5rem]">
        <h2 className="mb-10 font-semibold text-3xl text-white md:text-4xl">
          Our culture
        </h2>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:w-1/2">
            {features.map(({ Icon, title, description }, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary2 p-3 rounded-lg">
                  <Icon className="font-semibold text-lg text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white">{title}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:w-1/2">
            <Image
              src="/images/pexels-fauxels-3184418.jpg"
              alt="Team walking together"
              width={500}
              height={300}
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>

        <div className="mt-10">
          <Button size={"lg"} variant={"outline"}>
            See Open Roles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurCulture;
