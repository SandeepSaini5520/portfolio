import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import sandeepAvatar from "@/assets/sandeep-avatar.jpg";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/SandeepSaini_Resume.pdf";
    link.download = "SandeepSaini_Resume.pdf";
    link.click();
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F6FA]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional workspace background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F6FA]/90 via-[#F5F6FA]/70 to-[#4EA5D9]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-[#1F2D5A] font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-[#1F2D5A] mb-4">
                Sandeep Saini
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#4EA5D9] mb-4">
                Frontend Developer
              </h2>
              <p className="text-lg text-[#2E2E2E] mt-2 max-w-2xl">
                Building fast, accessible, and responsive web apps with 2+ years
                of experience in React, Next.js, and modern web technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={handleDownloadResume}
                className="btn-cta text-white font-medium px-6 py-3"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border-[#4EA5D9] text-[#4EA5D9] hover:bg-[#4EA5D9] hover:text-white"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#4EA5D9] hover:bg-[#4EA5D9]/10"
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
                className="hover:text-[#4EA5D9] hover:bg-[#4EA5D9]/10"
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
                className="hover:text-[#4EA5D9] hover:bg-[#4EA5D9]/10"
                asChild
              >
                <a href="mailto:official.sandeepsaini05@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Avatar Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={sandeepAvatar}
                  alt="Sandeep Saini - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
