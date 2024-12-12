import AboutSection from "@/components/home/about-section";
import Banner from "@/components/home/banner";
import Ceo from "@/components/home/ceo";
import MissionVision from "@/components/home/mission-vision";

export default function Home() {
  return (
    <>
      <Banner />
      {/* would like for the components that come after the banner to have a lil padding, depending on the component sha, there can be exceptions */}
      {/* aiit it's calm man */}
      <div className="px-5">
        <AboutSection />
        <Ceo />
        <MissionVision />
      </div>
    </>
  );
}
