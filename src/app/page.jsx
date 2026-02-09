import Logo from "./components/clients/Logo";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />
      <Logo />
    </div>
  );
}
