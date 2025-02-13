import AboutSection from "@/components/home/about-section";
import Banner from "@/components/home/banner";
import Clients from "@/components/home/clients";
import Partners from "@/components/home/partners";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <Services />
      <Clients />
      <Partners />
    </>
  );
}
