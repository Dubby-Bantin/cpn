import type { Metadata } from "next";
import "./globals.css";
import "./globals.css";
import NavBar from "@/components/navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/common/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cpnltd.com.ng/"),
  title: { default: "Center Point Network", template: " %s | Center-point" },
  description:
    "At Center Point Network Ltd., we specialize in delivering cutting-edge IT and network solutions tailored to empower businesses.",
  keywords: [
    "It-solutions",
    "CenterPoint Network",
    "Information",
    "Technology",
    "Corporate Trainings",
    "Web Solutions",
    "Consultancy Services",
  ],
  openGraph: {
    description:
      "At Center Point Network Ltd., we specialize in delivering cutting-edge IT and network solutions tailored to empower businesses.",
    url: "https://www.cpnltd.com.ng/",
    type: "website",
    siteName: "Cpn",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
