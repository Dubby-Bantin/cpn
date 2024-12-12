"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
const NavBar = () => {
  const pathName = usePathname();
  return (
    <header
      className={`bg-white top-0 z-[999] sticky w-full px-5 flex justify-between items-center p-1 transition-all duration-300`}
    >
      <Link href="/" className="">
        <Image
          src="https://tse1.mm.bing.net/th?id=OIG3..6jQXo7stSjshw45zUR5&pid=ImgGn"
          alt="cpn_logo"
          width={50}
          height={50}
          priority
          className="rounded-full"
        />
      </Link>

      <nav className="relative md:flex items-center gap-5 hidden dark:text-white">
        {navLinks.map(({ name, path }) => (
          <Link
            key={path}
            href={`${path}`}
            className={`relative flex flex-col items-center px-3 py-2 rounded-xl text-sm transition-colors duration-200 ${
              path === pathName ? "text-blue-500" : ""
            }`}
          >
            {name}
            <AnimatePresence>
              {path === pathName && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  transition={{ delay: 0.8 }}
                  className="top-8 absolute bg-blue-500 rounded-full w-1 h-1"
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden shrink-0">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="z-[999] flex flex-col">
          <SheetTitle>
            {" "}
            <Link href="/" className="relative -top-2">
              <Image
                src="https://tse1.mm.bing.net/th?id=OIG3..6jQXo7stSjshw45zUR5&pid=ImgGn"
                alt="cpn_logo"
                width={50}
                height={50}
                priority
                className="rounded-full"
              />
            </Link>
          </SheetTitle>

          {navLinks.map(({ name, path, Icon }) => (
            <Link
              key={path}
              href={`${path}`}
              className="flex items-center gap-2 py-2 rounded-xl text-sm transition-colors duration-200"
            >
              <Icon className="group-hover:scale-110 w-3 h-3 transition-all" />
              {name}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default NavBar;
