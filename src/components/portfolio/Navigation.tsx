import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Folder,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HEADER_HEIGHT = 64; // px, adjust if your header is taller

const iconMap = {
  home: Home,
  about: User,
  skills: Code,
  experience: Briefcase,
  projects: Folder,
  contact: Mail,
};

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  const navItems = [
    { href: "#home", label: "Home", icon: "home" },
    { href: "#about", label: "About", icon: "about" },
    { href: "#skills", label: "Skills", icon: "skills" },
    { href: "#experience", label: "Experience", icon: "experience" },
    { href: "#projects", label: "Projects", icon: "projects" },
    { href: "#contact", label: "Contact", icon: "contact" },
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
      // Set active link
      setActiveHref(href);
      // Close mobile menu after scroll
      setTimeout(() => setIsMobileMenuOpen(false), 400);
    }
  };

  return (
    <nav className="w-full bg-[#FAF9EE] border-b shadow-md transition-all duration-300 sticky top-0 z-50 md:fixed md:top-0 md:left-0 md:right-0">
      <div className="container md:mx-auto md:px-4 md:py-4">
        <div className="flex items-end justify-between px-4">
          <div
            className="font-bold text-xl text-black cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            Sandeep Saini
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-end space-x-1">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              const isActive = activeHref === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    flex items-center space-x-2 font-normal border-black border-opacity-20 transition-colors
                    ${
                      isActive
                        ? "bg-black text-white text-sm rounded-full px-4 py-2"
                        : "text-foreground hover:bg-black text-sm hover:text-white rounded-full px-4 py-2"
                    }
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
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
              className="md:hidden mt-4 pb-4 border-t rounded-sm pt-4 bg-[#FAF9EE]"
            >
              {navItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                const isActive = activeHref === item.href;
                return (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`
                      flex items-center gap-3 w-full font-semibold text-left py-2 px-4 rounded-md transition-colors
                      ${
                        isActive
                          ? "bg-black text-white rounded-full px-4 py-2"
                          : "text-foreground hover:bg-black hover:text-white"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
