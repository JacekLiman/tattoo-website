import About from "./components/About";
import Contact from "./components/Contact";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Interview from "./components/Interview";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
    </div>
  );
}

export default App;
