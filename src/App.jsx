import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Documents from "./components/Documents";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <About />
        <Documents />
        <Skills />
        <Projects />
        <Experience />
        <Gallery />
        <Resume />
        <Contact />

      </main>

      <Footer />
    </div>
  );
}

export default App;
