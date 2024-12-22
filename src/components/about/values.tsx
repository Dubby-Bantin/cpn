import { values } from "@/lib/constants";
import Image from "next/image";

const Values = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <h1 className="font-semibold text-3xl text-primary-orange md:text-4xl tracking-wider">
            Our Core Values
          </h1>
          <div className="bg-darkBlue rounded-sm w-20 h-2" />
        </div>
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 p-20 w-full">
          {values.map(({ Icon, title, body }, i) => (
            <div
              className="flex flex-col gap-5 shadow-md p-10 rounded-md"
              key={i}
            >
              <Image src={Icon} alt="" height={30} width={30} />
              <p className="text-darkBlue text-xl">{title}</p>
              <small>{body}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
