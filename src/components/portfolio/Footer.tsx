import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center md:items-center">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Sandeep Saini
            </h3>
            <p className="text-muted-foreground text-base md:text-lg">
              Frontend Developer specializing in React & Next.js
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full text-center mb-6 md:mb-0"
          >
            <h4 className="font-semibold text-foreground mb-4 text-base md:text-lg">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() =>
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full text-center md:text-right"
          >
            <div className="flex justify-center md:justify-end gap-3 mb-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://linkedin.com/in/sandeep-saini-143287231"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://github.com/sandeepsaini"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:official.sandeepsaini05@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t text-center"
        >
          <p className="text-muted-foreground flex flex-col md:flex-row items-center justify-center gap-2 text-sm md:text-base">
            © {currentYear} Sandeep Saini. Made with
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            and lots of ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
