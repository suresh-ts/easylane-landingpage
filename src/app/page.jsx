import Logo from "./components/clients/Logo";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Technology from "./components/technology/page";
import ProductOverview from "./components/product-overview/page";
import ProblemStatement from "./components/problem/page";
import Solution from "./components/solution/page";
import ChannelPartner from "./components/channel-partner/page";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <About />
      <Technology />
      <ProductOverview />
      <ProblemStatement />
      <Solution />
      <ChannelPartner />
      <Logo />

    </div>
  );
}
