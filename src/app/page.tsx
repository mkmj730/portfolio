import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ValueProps from "@/components/ValueProps";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <SocialProof />
      <ValueProps />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
