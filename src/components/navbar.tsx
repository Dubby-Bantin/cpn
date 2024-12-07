import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
const NavBar = () => {
  return (
    <header
      className={`border-b bg-white top-0 z-[999] sticky px-5 flex justify-between items-center p-1 transition-all duration-300`}
    >
      <Link href="/" className="">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={80}
          height={38}
          priority
        />
      </Link>

      <nav className="relative md:flex items-center gap-5 hidden dark:text-white">
        {navLinks.map(({ name, path }) => (
          <Link
            key={path}
            href={`/${path}`}
            className="flex items-center gap-4 px-3 py-2 rounded-xl text-sm transition-colors duration-200"
          >
            {name}
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
            <Link href="/" className="">
              <Image
                src="/next.svg"
                alt="Next.js logo"
                width={80}
                height={38}
                priority
              />
            </Link>
          </SheetTitle>

          {navLinks.map(({ name, path, Icon }) => (
            <Link
              key={path}
              href={`/${path}`}
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
