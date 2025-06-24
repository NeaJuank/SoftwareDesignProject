import Navbar from "@components/navbar";
import About from "@features/landingPage/sections/about";
import Footer from "@features/landingPage/sections/footer";
import Hero from "@features/landingPage/sections/heroSection";
import Reviews from "@features/landingPage/sections/review";
import Services from "@features/landingPage/sections/services";
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
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
};

export default LandingPage;
