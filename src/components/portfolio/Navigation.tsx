import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HEADER_HEIGHT = 64; // px, adjust if your header is taller

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Scroll with offset for fixed header
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        HEADER_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
      // Close mobile menu after scroll
      setTimeout(() => setIsMobileMenuOpen(false), 400);
    }
  };

  return (
    <nav className="w-full bg-[#FAF9EE] border-b shadow-md transition-all duration-300 sticky top-0 z-50 md:fixed md:top-0 md:left-0 md:right-0">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="font-bold text-xl text-gradient cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            Sandeep Saini
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t rounded-sm pt-4 bg-[#EEEEEE]"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 px-4 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
