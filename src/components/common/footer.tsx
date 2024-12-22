import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <div className="bg-[#ffeded]">
    <footer className="px-5 py-10 text-black">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-4 mx-auto max-w-screen-xl">
        <div>
          <Link href="/" aria-label="Home">
            <Image
              src="/CPNRed.svg"
              alt="CPN Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
          <div className="mt-5">
            <h3 className="mb-2 font-bold text-lg">Abuja</h3>
            <address className="text-sm not-italic">
              2nd Floor, ASTA GALLERY
              <br />
              Plot 1185, Parkway Road,
              <br />
              Cadastral Zone, Mabushi District,
              <br />
              Abuja FCT, Nigeria
            </address>
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-lg">Lagos</h3>
            <address className="text-sm not-italic">
              295 Herbert Macaulay Way,
              <br />
              Alagomeji-Yaba, Lagos
            </address>
          </div>
          <div className="flex space-x-4 mt-5 text-2xl text-primary2">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-lg">Kaduna</h3>
          <address className="text-sm not-italic">
            47, Kanta Road, Unguwar
            <br />
            Rimi, Kaduna State.
          </address>
          <div className="mt-5">
            <h3 className="font-bold text-lg">
              Outsource Global INC, Mailing Address
            </h3>
            <address className="text-sm not-italic">
              2261 Market Street #4397,
              <br />
              San Francisco CA, 94114
            </address>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Services",
              "About Us",
              "Careers",
              "Employee ERP",
              "Leadership",
            ].map((link, index) => (
              <li key={index}>
                <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-5 font-bold text-lg">Resources</h3>
          <ul className="space-y-2 text-sm">
            {["Gallery", "Case Studies", "Privacy Policy", "Articles"].map(
              (resource, index) => (
                <li key={index}>
                  <Link
                    href={`/${resource.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {resource}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-lg">Quick Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:info@outsourceglobal.com">
                info@outsourceglobal.com
              </a>
            </li>
            <li>NG: +234 7006 8876 8723</li>
            <li>UK: +44 020 8323 5771</li>
            <li>US: +1-332-207-2865</li>
          </ul>
          <h3 className="mt-5 font-bold text-lg">Highlights</h3>
          <a
            href="#"
            className="text-primary2 text-sm hover:text-primary3 underline"
          >
            Outsource Global Wins 2021 Service Exporting Award
          </a>
        </div>
      </div>
    </footer>

    <div className="flex justify-center items-center bg-darkBlue py-5 text-white">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Outsource Global. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
