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
      <section id="hero"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="transparency"><TransparencySection /></section>
      <section id="services"><ServicesSection /></section>
      
      <section id="process"><ProcessSection /></section>
      <section id="whychooseus"><WhyChooseUsSection /></section>
      <section id="letstalk"><LetsTalkSection /></section>
    </>
  );
}
