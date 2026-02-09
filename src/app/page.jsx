import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Technology from "./components/technology/page";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />
        <div className="bg-white flex justify-center items-center section-width">
        <img src="/admin-img.png" alt="Easy Lane" className="w-full sm:w-[80%] h-auto" />
      </div>
      <About />
      <Technology />

    </div>
  );
}
