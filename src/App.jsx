import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Documents from "./components/Documents";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";


function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white font-sans selection:bg-purple-500/30 overflow-x-hidden transition-colors duration-300">
      <CursorGlow />
      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <About />
        <Education />
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
