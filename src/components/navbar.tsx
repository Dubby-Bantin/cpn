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
          src="https://files.oaiusercontent.com/file-KUhJcpx9MkeYLzSs4abCKk?se=2024-12-07T13%3A02%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De115eab0-7913-4b50-8ea9-700e2b3eaf1f.webp&sig=zDXMMYKmLHH4SVk2MgnQavthLLEEx6ClPaoIALhNFSs%3D"
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
                src="https://files.oaiusercontent.com/file-KUhJcpx9MkeYLzSs4abCKk?se=2024-12-07T13%3A02%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De115eab0-7913-4b50-8ea9-700e2b3eaf1f.webp&sig=zDXMMYKmLHH4SVk2MgnQavthLLEEx6ClPaoIALhNFSs%3D"
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
