import Logo from "./components/clients/Logo";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Technology from "./components/technology/page";
import Testimonal from "./components/testimonals/Testimonal";
import Team from "./components/team/Team";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
import ProductOverview from "./components/product-overview/page";
import ProblemStatement from "./components/problem/page";
import Solution from "./components/solution/page";
import ChannelPartner from "./components/channel-partner/page";
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
      <ProductOverview />
      <ProblemStatement />
      <Solution />
      <ChannelPartner />
      <Logo />
      <Testimonal />
      <Team />
      <Faq />
      <Contact />


    </div>
  );
}
