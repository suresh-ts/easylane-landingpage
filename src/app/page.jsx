import Logo from "./components/clients/Logo";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Technology from "./components/technology/page";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <About />
      <Technology />
      <Logo />

    </div>
  );
}
