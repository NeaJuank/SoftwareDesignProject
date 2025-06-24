import { useEffect } from "react";
import Navbar from "@components/navbar";
import About from "@features/landingPage/sections/about";
import Footer from "@features/landingPage/sections/footer";
import Hero from "@features/landingPage/sections/heroSection";
import Reviews from "@features/landingPage/sections/review";
import Services from "@features/landingPage/sections/services";
import WhyChooseUs from "@features/landingPage/sections/whyChooseUs";
import CarCard from '@features/landingPage/sections/cars';

const LandingPage = () => {

  useEffect(() => {
    if (
      !window.chatbase ||
      (typeof window.chatbase === 'function' &&
        window.chatbase('getState') !== 'initialized')
    ) {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === 'q') {
            return target.q;
          }
          return (...args) => target(prop, ...args);
        },
      });
    }

    const onLoad = () => {
      const script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.id = 'S4Z4Bmgf643TvxMcvfu8e';
      script.setAttribute('domain', 'www.chatbase.co');
      document.body.appendChild(script);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }
  }, []);

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
