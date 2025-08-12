import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="relative max-w-4xl mx-auto min-h-screen">
        <Navbar />
        <main className="px-6 pt-20 pb-12 sm:px-8 sm:pt-24 md:px-12">
          <Hero />

          <div className="mt-16 flex flex-col gap-16 sm:gap-20">
            <About />
            <hr className="border-neutral-800" />
            <Skills />
            <hr className="border-neutral-800" />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
