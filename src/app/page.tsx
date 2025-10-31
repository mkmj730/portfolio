import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <SocialProof />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
