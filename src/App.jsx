import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import CursorGlow from "@/components/CursorGlow";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Certifications from "@/pages/Certifications";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function getBasename() {
  if (typeof window !== "undefined" && window.location.pathname.startsWith("/adarsh-portfolio")) {
    return "/adarsh-portfolio";
  }
  return "";
}

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#070B17] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 overflow-x-hidden transition-colors duration-300">
        <CursorGlow />
        <Navbar />

        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
