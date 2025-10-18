import { motion } from "framer-motion";
import { Mail, Github, Linkedin, PhoneCall } from "lucide-react";
import sandeepAvatar from "@/assets/sandeep-avatar.jpg";

const COLORS = {
  gray: "#C4C4C4",
  black: "#000000",
  white: "#ffffff",
};

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const avatarVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-label="Hero Section introducing Sandeep Saini"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Left diagonal gray background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundColor: COLORS.gray,
            clipPath: "polygon(0 0, 50% 0, 40% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto md:px-6 md:py-20 md:max-w-7xl">
        <div className="flex flex-col align-top justify-start md:grid lg:grid-cols-2 gap-48">
          {/* Left text content */}
          <motion.header
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-black"
          >
            <p className="text-xl mb-2 font-medium">Hi, I am</p>
            <motion.h1
              className="text-xl text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(42,123,155,1)_0%,rgba(49,84,64,1)_50%,rgba(25,167,189,1)_100%)] md:text-black md:text-6xl font-bold mb-1 md:mb-2 overflow-hidden whitespace-nowrap inline-block"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{
                clipPath: [
                  "inset(0 100% 0 0)",
                  "inset(0 0% 0 0)",
                  "inset(0 0% 0 0)",
                  "inset(0 100% 0 0)",
                ],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.3, 0.7, 1],
              }}
            >
              Sandeep Saini
            </motion.h1>

            <p className="text-sm font-medium text-gray-600 md:mb-3">
              (Front-end Developer)
            </p>

            {/* Social Icons */}
            <nav aria-label="Social media links" className="flex gap-4">
              {[
                {
                  href: "mailto:official.sandeepsaini05@gmail.com",
                  icon: Mail,
                  label: "Email Sandeep Saini",
                },
                {
                  href: "https://github.com/SandeepSaini5520",
                  icon: Github,
                  label: "GitHub profile",
                },
                {
                  href: "https://linkedin.com/in/sandeep-saini-143287231",
                  icon: Linkedin,
                  label: "LinkedIn profile",
                },
                {
                  href: "tel:+918295034479",
                  icon: PhoneCall,
                  label: "PhoneCall",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="p-3 bg-[#C4C4C4] hover:bg-black hover:text-white transition rounded shadow flex items-center justify-center"
                >
                  <Icon size={20} />
                </a>
              ))}
            </nav>
          </motion.header>

          {/* Right avatar image */}
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center relative"
          >
            <div
              className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-[#C4C4C4] shadow-2xl bg-white"
              aria-label="Sandeep Saini profile picture"
            >
              <img
                src={sandeepAvatar}
                alt="Sandeep Saini smiling, wearing a light blue shirt"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Rotating dashed white border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-0 rounded-full border-2 border-dashed border-black"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
