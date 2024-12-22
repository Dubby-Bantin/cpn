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
      className={`bg-white top-0 z-[999] py-2 sticky w-full px-5 flex justify-between items-center p-1 transition-all duration-300`}
    >
      <Link href="/" className="h-auto overflow-visible">
        <Image
          src="/Asset 27Blessed.png"
          alt="cpn_logo"
          width={110} // Correct width
          height={50} // Correct height
          quality={100}
          priority
          className="w-[110px]"
        />
      </Link>

      <nav className="relative md:flex items-center gap-5 hidden dark:text-white">
        {navLinks.map(({ name, path }) => (
          <Link
            key={path}
            href={`${path}`}
            className={`relative flex flex-col items-center px-3 py-2 rounded-xl text-sm transition-colors duration-200 ${
              path === pathName ? "text-primary2" : ""
            }`}
          >
            <p className="text-[16px]">{path === "/contact" ? "" : name}</p>

            <AnimatePresence>
              {path === pathName && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  transition={{ delay: 0.8 }}
                  className="top-8 absolute bg-primary2 rounded-full w-1 h-1"
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </nav>
      <Link
        href="/contact"
        className="hidden md:block font-[500] px-6 py-3 bg-primary2 text-white rounded-lg"
      >
        Contact Us
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden shrink-0">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="z-[999] flex flex-col">
          <SheetTitle className="w-fit">
            {" "}
            <Link href="/" className="relative -top-2">
              <Image
                src="/Asset 27Blessed.png"
                alt="cpn_logo"
                width={110} // Correct width
                height={50} // Correct height
                quality={100}
                priority
                className="w-[110px]"
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
