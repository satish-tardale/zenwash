import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import mainzenlogo from '../assets/mainzenlogo.png';



interface HeaderProps {
  onComingSoonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onComingSoonClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "How it Works", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href:"#contact"}
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? "bg-white border-gray-200 shadow-md" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex justify-between items-center py-2">
            <img
              src={mainzenlogo}
              
              alt="Zen Wash Logo"
              className="h-14 w-18"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={onComingSoonClick}
                className={`transition-colors duration-200 font-medium text-lg ${
                  isScrolled ? "text-gray-900 hover:text-blue-900" : "text-white hover:text-cyan-300"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onComingSoonClick}
              className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
         <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
>
  {isMenuOpen ? (
    <X className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
  ) : (
    <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
  )}
</button>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={onComingSoonClick}
                  className="  to-cyan-400 hover:text-blue-900 transition-colors duration-200 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
            
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;