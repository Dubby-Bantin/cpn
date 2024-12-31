"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { leadership } from "@/lib/constants";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

export default function Leadership() {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(95.08deg, #f1fcfd 3.92%, #ffeded 57.81%, #e9f6fb 99.18%)",
        }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col gap-8 w-full md:w-[75%] py-[50px] px-[20px] md:py-[100px]">
          <div>
            <h1 className="font-semibold text-3xl md:text-4xl leading-snug md:leading-tight">
              Our Leadership Team
            </h1>
            <div className="h-[8px] w-[100px] bg-primary2 rounded-md"></div>
          </div>
          <p className="text-[14px]">
            At Center Point Network Ltd., our leadership team is the driving
            force behind our commitment to innovation, excellence, and client
            satisfaction. Together, they bring a wealth of experience and a
            shared vision for success. Here is an overview of the exceptional
            individuals leading our company:
          </p>
        </div>
      </div>
      <div className="relative flex justify-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[90%] place-items-center">
          {leadership.map(({ name, title, message, image, bio }, i) => (
            <div
              className="flex flex-col gap-3 items-center justify-center"
              key={i}
            >
              <Image
                width={200}
                height={500}
                src={image.length > 0 ? image : "/images/leadership/user.avif"}
                alt="name"
                className="object-cover object-top h-[200px] w-[200px] rounded-full"
              />
              <h1 className="font-semibold text-[15px]">
                {name.toLocaleUpperCase()}
              </h1>
              <h3 className="text-[14px] text-gray-500">{title}</h3>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="underline text-primary2">
                      Read Bio
                    </button>
                  </DialogTrigger>
                  <DialogContent className="relative flex flex-col items-center justify-center max-w-3xl h-auto p-6 md:p-10 rounded-lg shadow-md">
                    <DialogClose className="absolute top-3 right-3 bg-gray-200 rounded-full p-2 w-fit">
                      <RxCross1 className="text-[15px]" />
                    </DialogClose>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>hllo</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[30%_70%] w-full bg-white text-popover-foreground">
                      <div className="flex flex-col items-center gap-3">
                        <Image
                          width={200}
                          height={500}
                          src={
                            image.length > 0
                              ? image
                              : "/images/leadership/user.avif"
                          }
                          alt="name"
                          className="object-cover object-top h-[200px] w-[200px] rounded-full"
                        />
                        <h1 className="font-semibold text-[15px]">
                          {name.toLocaleUpperCase()}
                        </h1>
                        <h3 className="text-[14px] text-gray-500">{title}</h3>
                      </div>
                      <div className="h-full overflow-y-scroll ceo">
                        <div className={`${message && "mb-10"}`}>{bio}</div>
                        <div>
                          {message && (
                            <h1 className="font-semibold text-[15x] mb-2 text-center">
                              MESSAGE FROM THE CEO
                            </h1>
                          )}
                          <p>{message}</p>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>hello</DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
