import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <div className="bg-[#ffeded]">
    <footer className="px-5 py-10 text-black">
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-screen-xl">
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
            <h3 className="mb-2 font-bold text-lg">Owerri</h3>
            <address className="text-sm not-italic">
              57 Okigwe Road,
              <br />
              Opposite Government Secondary School,
              <br />
              Owerri, Imo State.
            </address>
            <p className="mt-1">08172419716</p>
          </div>
          <div className="flex space-x-4 mt-5 text-2xl text-primary2">
            <a
              href="https://facebook.com/AptechOwerriCenter"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/aptech.owerri"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-lg">Enugu</h3>
          <address className="text-sm not-italic">
            50 Zik Avenue,
            <br />
            Opposite HRC Bus Stop,
            <br />
            Enugu, Enugu State.
          </address>
          <p className="mt-1">08148544024</p>
          <div className="flex space-x-4 mt-5 text-2xl text-primary2">
            <a
              href="https://facebook.com/AptechEnuguCenter"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a href="https://instagram.com/aptechenugu" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-lg">Umuahia</h3>
          <address className="text-sm not-italic">
            2 Umuwaya Road,
            <br />
            Beside Motel De Plaza,
            <br />
            Umuahia, Abia State.
          </address>
          <p className="mt-1">08159000220</p>
          <div className="flex space-x-4 mt-5 text-2xl text-primary2">
            <a
              href="https://facebook.com/AptechUmuahiaCenter"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/aptechumuahia"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-lg">Onitsha</h3>
          <address className="text-sm not-italic">
            1 Ekwere Ekwu Street,
            <br />
            Off Court Road, By CPS,
            <br />
            Onitsha, Anambra State.
          </address>
          <p className="mt-1">08068466178, 08081579809</p>
          <div className="flex space-x-4 mt-5 text-2xl text-primary2">
            <a
              href="https://facebook.com/AptechOnitshaCenter"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/aptechonitsha"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mt-5 font-bold text-lg">Kubwa</h3>
          <address className="text-sm not-italic">
            COK Best Limited,
            <br />
            Plot 658/659 Arab Road,
            <br />
            Kubwa, Abuja.
          </address>
          <p className="mt-1">08169658898</p>
          <div className="flex space-x-4 mt-5 text-2xl text-primary2">
            <a href="https://facebook.com/AptechKubwa" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/aptechkubwa" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>

    <div className="flex justify-center items-center bg-darkBlue py-5 text-white">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Aptech Computer Education. All Rights
        Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
