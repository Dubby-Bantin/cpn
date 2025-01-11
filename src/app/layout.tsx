import type { Metadata } from "next";
import "./globals.css";
import "./globals.css";
import NavBar from "@/components/common/navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/common/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cpnltd.com.ng/"),
  title: {
    default: "Center Point Network",
    template: " %s | Center Point Network",
  },
  description:
    "Center Point Network Ltd. delivers cutting-edge IT and network solutions tailored to empower businesses through innovative technology.",
  keywords: [
    "IT solutions",
    "Center Point Network",
    "Information Technology",
    "Corporate Training",
    "Web Development",
    "Consultancy Services",
    "Networking",
    "Business Solutions",
    "IT Consultancy",
  ],
  verification: {
    google: "9zEAtYsvVRTWaHeAduENEchL_nmP-4fT3T5PSk701CM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased `}>
        <NavBar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
