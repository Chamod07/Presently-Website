
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary">
            Presently
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full glass py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 text-primary hover:text-primary/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Request Demo
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
