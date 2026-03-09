import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { ExperienceSection } from "./components/Experience/Experience";
import { SkillsSection } from "./components/Skills/Skills";
import { EducationSection } from "./components/Education/Education";
import { ContactSection } from "./components/Contact/Contact";
import { CTA } from "./components/CTA/CTA";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="hero-about-wrapper">
        <Hero />
        <About />
      </div>
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <CTA />
      <Footer />
    </>
  );
}
