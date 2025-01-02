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
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Educational",
  description:
    "Center Point Network is one the biggest franchises of Aptech Computer Education in Nigeria which serves as the training aim. having its centers in different parts of Nigeria.",
  openGraph: {
    url: "https://www.cpnltd.com.ng/educational/",
  },
};

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
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5 w-[90%]">
          {educational.map(({ amount, image, title, courses }, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="relative shadow-md rounded-md cursor-pointer group">
                  <div className="top-0 left-0 z-50 absolute bg-black opacity-0 group-hover:opacity-20 rounded-t-md w-full h-[210px] transition-all duration-500"></div>
                  <Image
                    width={200}
                    height={500}
                    src={image}
                    alt="name"
                    className="object-top rounded-t-md w-full h-[210px] object-cover"
                  />
                  <div className="flex flex-col gap-2 p-3">
                    <p className="font-semibold text-primary2">{title}</p>
                    <p className="text-[14px]">{amount} Courses</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="rounded-lg w-[90%] md:w-[80%] h-[560px] md:h-[350px] overflow-hidden">
                <DialogHeader className="hidden">
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>hllo</DialogDescription>
                </DialogHeader>
                <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-item-center h-full overflow-y-scroll ceo2">
                  {courses.map(({ name, img }, j) => (
                    <div
                      key={j}
                      className="flex flex-col shadow-lg border rounded-md h-fit cursor-pointer"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt="name"
                        className="object-top rounded-t-md w-full h-[200px] md:h-[150px] object-cover"
                      />
                      <p className="p-3 text-[14px]">{name}</p>
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
