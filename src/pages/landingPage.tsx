import Navbar from "../components/navbar";
import About from "../features/landingPage/about";
import Hero from "../features/landingPage/heroSection";

const LandingPage = () => {
  return (
    <div>
      <header className="sticky top-0 z-100">
        <Navbar />
      </header>
      <Hero />
      <About />
    </div>
  );
};

export default LandingPage;
