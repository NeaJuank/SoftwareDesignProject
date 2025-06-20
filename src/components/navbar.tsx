import { useState } from "react";
import { Car, Menu, X } from "lucide-react";
import { authItems, navbarItems } from "../types/components/navbarItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">LuxeDrive</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navbarItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-white hover:text-emerald-300 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {authItems.map((item, index) => (
              <Link key={index} to={item.link}>
                <button className={item.stylesDesktop}>
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {/**navbar items mapping */}
              {navbarItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-white hover:text-emerald-300 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                {/**auth items mapping */}
                {authItems.map((item, index) => (
                  <Link key={index} to={item.link}>
                    <button className={item.stylesMobile}>
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
