import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { educational } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export default function Educational() {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(95.08deg, #f1fcfd 3.92%, #ffeded 57.81%, #e9f6fb 99.18%)",
        }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col gap-8 px-[20px] py-[50px] md:py-[100px] w-full md:w-[75%]">
          <div>
            <h1 className="font-semibold text-3xl md:text-4xl leading-snug md:leading-tight">
              Our Educational System
            </h1>
            <div className="bg-primary2 rounded-md w-[100px] h-[8px]"></div>
          </div>
          <p className="text-[14px]">
            Center Point Network is one the biggest franchises of Aptech
            Computer Education in Nigeria which serves as the training aim.
            having its centers in different parts of Nigeria. Aptech is a Global
            Career Education Company with a presence across 40+ countries in 5
            continents, is playing a key role in helping individuals,
            organizations and nations adapt to the changing requirements of a
            knowledge-driven world. Aptech commenced its business with IT
            education & training business in 1986 and has trained over 6.8
            million students – globally. Aptech is listed on the Bombay Stock
            Exchange (Code: 532475) and National Stock Exchange (Code: APTECTH)
            based in Mumbai,India.
          </p>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5 w-[90%]">
          {educational.map(({ amount, image, title, courses }, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="cursor-pointer group shadow-md rounded-md relative">
                  <div className="transition-all duration-500 opacity-0 group-hover:opacity-20 absolute top-0 left-0 z-50 rounded-t-md bg-black w-full h-[210px]"></div>
                  <Image
                    width={200}
                    height={500}
                    src={image}
                    alt="name"
                    className="rounded-t-md object-top w-full h-[210px] object-cover"
                  />
                  <div className="flex flex-col gap-2 p-3">
                    <p className="text-primary2 font-semibold">{title}</p>
                    <p className="text-[14px]">{amount} Courses</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="w-[90%] md:w-[80%] h-[560px] overflow-hidden md:h-[350px] rounded-lg">
                <DialogHeader className="hidden">
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>hllo</DialogDescription>
                </DialogHeader>
                <div className="h-full overflow-y-scroll ceo2 grid gap-10 grid-cols-1 place-item-center sm:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course, j) => (
                    <div
                      key={j}
                      className="flex flex-col h-fit shadow-lg border rounded-md"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={course.img}
                        alt="name"
                        className="w-full h-[200px] md:h-[150px] rounded-t-md object-top object-cover"
                      />
                      <p className="p-3 text-[14px]">{course.name}</p>
                    </div>
                  ))}
                </div>
                <DialogFooter className="hidden">hello</DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      <div>
        <Image
          height={500}
          width={500}
          src="https://aptech-nigeria.com/wp-content/uploads/2023/05/Banner-2048x1229.jpg"
          alt="flyer"
          className="w-full"
        />
      </div>
    </div>
  );
}
