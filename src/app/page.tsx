import HeroSection from "../components/homepage/herosection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import TransparencySection from "../components/sections/TransparencySection";
import ProcessSection from "../components/sections/ProcessSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import LetsTalkSection from "../components/sections/LetsTalkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TransparencySection />
      <ProcessSection />
      <WhyChooseUsSection />
      <LetsTalkSection />
    </>
  );
}
