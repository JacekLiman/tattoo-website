import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default App;
