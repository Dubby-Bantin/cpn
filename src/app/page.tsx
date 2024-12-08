import AboutSection from "@/components/home/about-section";
import Banner from "@/components/home/banner";

export default function Home() {
  return (
    <>
      <Banner />
      {/* would like for the components that come after the banner to have a lil padding, depending on the component sha, there can be exceptions */}
      <div className="px-5">
        <AboutSection />
      </div>
    </>
  );
}
