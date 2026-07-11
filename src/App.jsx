import { ThemeProvider } from "./context/ThemeContext";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import OpenSource from "./sections/OpenSource";
import Articles from "./sections/Articles";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />          
          <Work />
          <Education />
          <Projects />
          <Skills />
          <OpenSource />
          <Articles />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
