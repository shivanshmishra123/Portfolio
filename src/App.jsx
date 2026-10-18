import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfilesMarquee from "./components/ProfilesMarquee";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-100 font-sans antialiased selection:bg-[#FF5A36] selection:text-white scroll-smooth relative">
      {/* Global Background Grid & Dot Matrix Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Technical Grid + Dots */}
        <div className="absolute inset-0 bg-grid-dots opacity-55" />

        {/* Soft, subtle top ambient wash - very gentle atmosphere */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,90,54,0.07),transparent_75%)] pointer-events-none" />

        {/* Soft edge vignette to focus center content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.6)_100%)] pointer-events-none" />
      </div>

      {/* Interactive Cursor Spotlight */}
      <CursorGlow />

      {/* Foreground Interactive Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProfilesMarquee />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
