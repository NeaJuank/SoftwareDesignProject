import Navbar from "@components/navbar";
import About from "@features/landingPage/sections/about";
import Hero from "@features/landingPage/sections/heroSection";
import WhyChooseUs from "@features/landingPage/sections/whyChooseUs";

const LandingPage = () => {
  return (
    <div>
      <header className="sticky top-0 z-100">
        <Navbar />
      </header>
      <Hero />
      <About />
      <WhyChooseUs />
    </div>
  );
};

export default LandingPage;
