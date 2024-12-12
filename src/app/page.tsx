import AboutSection from "@/components/home/about-section";
import Banner from "@/components/home/banner";
import Ceo from "@/components/home/ceo";
import MissionVision from "@/components/home/mission-vision";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="px-5">
        <AboutSection />
        <Ceo />
        <MissionVision />
      </div>
    </>
  );
}
