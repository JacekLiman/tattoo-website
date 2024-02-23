import About from "./components/About";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
    </div>
  );
}

export default App;
