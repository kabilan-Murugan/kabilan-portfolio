import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen selection:bg-blue-500/30">
      <Hero />
      <Skills />
      <Experience />
      <Achievements />
      <Footer />
    </main>
  );
}