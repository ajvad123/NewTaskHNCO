
import React, { useState, useEffect } from "react";
import CitronLogo from "../assets/CitronLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <CitronLogo className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link text-gray-800 hover:text-primary">
              Home
            </a>
            <a href="#about" className="nav-link text-gray-800 hover:text-primary">
              About Us
            </a>
            <a href="#" className="nav-link text-gray-800 hover:text-primary">
              Holiday
            </a>
            <a href="#" className="nav-link text-gray-800 hover:text-primary">
              Visa
            </a>
            <a href="#" className="nav-link text-gray-800 hover:text-primary">
              City Tours
            </a>
            <a href="#offer" className="nav-link text-gray-800 hover:text-primary">
              Offers
            </a>
            <a href="#blog" className="nav-link text-gray-800 hover:text-primary">
              Blogs
            </a>
            <a href="#contact" className="enquire-btn">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a
              href="#"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Holiday
            </a>
            <a
              href="#"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Visa
            </a>
            <a
              href="#"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              City Tours
            </a>
            <a
              href="#"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Offers
            </a>
            <a
              href="#"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </a>
            <a
              href="#"
              className="inline-block enquire-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
