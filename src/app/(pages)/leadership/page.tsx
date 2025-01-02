import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { leadership } from "@/lib/constants";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "At Center Point Network Ltd., our leadership team is the driving force behind our commitment to innovation, excellence, and client satisfaction.",
  openGraph: {
    url: "https://www.cpnltd.com.ng/leadership/",
  },
};
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
        <div className="flex flex-col gap-8 px-[20px] py-[50px] md:py-[100px] w-full md:w-[75%]">
          <div>
            <h1 className="font-semibold text-3xl md:text-4xl leading-snug md:leading-tight">
              Our Leadership Team
            </h1>
            <div className="bg-primary2 rounded-md w-[100px] h-[8px]"></div>
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
      <div className="py-10">
        <div className="place-items-center gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%]">
          {leadership.map(({ name, title, message, image, bio }, i) => (
            <Dialog key={i}>
              <div className="flex flex-col justify-center items-center gap-3">
                <Image
                  width={200}
                  height={500}
                  src={
                    image.length > 0 ? image : "/images/leadership/user.avif"
                  }
                  alt="name"
                  className="object-top rounded-full w-[200px] h-[200px] object-cover"
                />
                <h1 className="font-semibold text-[15px]">
                  {name.toLocaleUpperCase()}
                </h1>
                <h3 className="text-[14px] text-gray-500">{title}</h3>
                <DialogTrigger asChild>
                  <Button variant={"link"}>Read Bio</Button>
                </DialogTrigger>
                <DialogContent className="">
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>hllo</DialogDescription>
                  </DialogHeader>
                  <div className="gap-5 grid grid-cols-1 lg:grid-cols-[30%_70%] bg-white w-full text-popover-foreground">
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
                        className="object-top rounded-full w-[200px] h-[200px] object-cover"
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
                          <h1 className="mb-2 font-semibold text-[15x] text-center">
                            MESSAGE FROM THE CEO
                          </h1>
                        )}
                        <p>{message}</p>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>hello</DialogFooter>
                </DialogContent>
              </div>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
