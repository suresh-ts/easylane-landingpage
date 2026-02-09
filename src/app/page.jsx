import Logo from "./components/clients/Logo";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Technology from "./components/technology/page";
import Testimonal from "./components/testimonals/Testimonal";
import Team from "./components/team/Team";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <About />
      <Technology />
      <Testimonal />
      <Team />
      <Faq />
      <Contact />
      <Logo />

    </div>
  );
}
