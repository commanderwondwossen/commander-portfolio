import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
     <Navbar />
     <Hero />    
     <About />
     <Expertise />
     <Projects />
     <Experience />
     <Education />
     <Contact />
     <Footer />
    </main>
  );
}