import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import KangInHamSection from "@/components/KangInHam";
import StoryStepper from "@/components/StoryStepper";
import AlchemyLabSection from "@/components/AlchemyLab";
import ClosingCTA from "@/components/ClosingCTA";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <StoryStepper />
      <KangInHamSection />
      <AlchemyLabSection />
      <ClosingCTA />
      <Skills />
      <Contact />
    </div>
  );
}
