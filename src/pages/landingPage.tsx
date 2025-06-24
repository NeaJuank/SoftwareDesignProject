import Navbar from "@components/navbar";
import About from "@features/landingPage/sections/about";
import Footer from "@features/landingPage/sections/footer";
import Hero from "@features/landingPage/sections/heroSection";
import Reviews from "@features/landingPage/sections/review";
import Services from "@features/landingPage/sections/services";
import WhyChooseUs from "@features/landingPage/sections/whyChooseUs";
import CarCard from '@features/landingPage/sections/cars'

const LandingPage = () => {
  return (
    <div>
      <header className="sticky top-0 z-100">
        <Navbar />
      </header>
      <div id='home'><Hero /></div>
      <div id='about'><About /></div>
      <div id='services'>
        <WhyChooseUs />
        <Services />
      </div>
      <div id='reviews'><Reviews /></div>
      <div id='cars'><CarCard /></div>
      <div id='contact'><Footer /></div>
    </div>
  );
};

export default LandingPage;
