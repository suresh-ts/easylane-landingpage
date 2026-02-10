import Logo from "./components/clients/Logo";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Technology from "./components/technology/page";
import Testimonal from "./components/testimonals/Testimonal";
import Team from "./components/team/Team";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
import Career from "./components/career/Career";
import ProductOverview from "./components/product-overview/page";
import ProblemStatement from "./components/problem/page";
import Solution from "./components/solution/page";
import ChannelPartner from "./components/channel-partner/page";
import Banner from "./components/banner/Banner";
import Footer from "./components/layout/footer/Footer";
import FadeInSection from "./components/common/FadeInSection";
export default function Home() {
  return (
    <div className="footer-reveal min-h-screen">
      <div className="footer-reveal__content">
        <Navbar />

        <Hero />
        <FadeInSection>
          <div className="bg-white flex justify-center padding-top items-center section-width">
            <img
              src="/admin-img.png"
              alt="Easy Lane"
              className="w-full sm:w-[80%] h-auto"
            />
          </div>
        </FadeInSection>

        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Technology />
        </FadeInSection>
        <FadeInSection>
          <ProductOverview />
        </FadeInSection>
        <FadeInSection>
          <ProblemStatement />
        </FadeInSection>
          <Solution />
        <FadeInSection>
          <ChannelPartner />
        </FadeInSection>
        <FadeInSection>
          <Logo />
        </FadeInSection>
        <FadeInSection>
          <Testimonal />
        </FadeInSection>
        <FadeInSection>
          <Team />
        </FadeInSection>
        <FadeInSection>
          <Faq />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
        <FadeInSection>
          <Career />
        </FadeInSection>
        <FadeInSection>
          <Banner />
        </FadeInSection>
      </div>
      <Footer className="footer-reveal__footer" />
    </div>
  );
}
