import { Suspense } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import InteractiveArchitect from "@/components/InteractiveArchitect";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#07090E] text-zinc-100 selection:bg-emerald-500/30 selection:text-white">
        <Navbar />
        <main>
          <HeroSection />
          <PhilosophySection />
          <InteractiveArchitect />
          <ProjectsSection />
          <SkillsSection />
          <TimelineSection />
          <ServicesSection />
          <Suspense fallback={null}>
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
