import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Code, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "2+ Years Experience",
      description: "Frontend development expertise",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Modern Tech Stack",
      description: "React, Next.js, TypeScript",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Accessible Design",
      description: "WCAG compliant applications",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Based in Noida",
      description: "India, UTC+5:30",
    },
  ];

  return (
    <section id="about" className=" py-2 md:py-3 bg-[#F5F6FA]">
      <div className="container mx-auto px-4 py-2 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D5A] mb-4 sm:text-2xl">
            About Me
          </h2>
          <p className="text-[#2E2E2E] max-w-2xl mx-auto sm:text-base">
            Passionate frontend developer dedicated to creating exceptional user
            experiences
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center sm:grid-cols-1 sm:gap-8">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg sm:mb-8 bg-white">
              <CardContent className="p-1 sm:p-4">
                <h3 className="text-2xl font-semibold text-[#1F2D5A] mb-6 sm:text-xl">
                  Frontend Developer & Problem Solver
                </h3>
                <div className="space-y-4 text-[#2E2E2E] sm:text-base">
                  <p>
                    I'm a passionate Frontend Developer with 2 years of
                    experience in creating responsive, accessible, and
                    user-friendly web applications. Based in
                    <span className="text-primary font-medium">
                      {" "}
                      Noida, India
                    </span>
                    , I specialize in modern web technologies and best
                    practices.
                  </p>
                  <p>
                    My expertise lies in building fast, scalable applications
                    using
                    <span className="text-primary font-medium">
                      {" "}
                      React, Next.js, and TypeScript
                    </span>
                    . I'm particularly focused on creating accessible
                    experiences that follow WCAG standards and deliver excellent
                    Core Web Vitals performance.
                  </p>
                  <p>
                    At{" "}
                    <span className="text-primary font-medium">
                      Icreon Communication
                    </span>
                    , I've worked on diverse projects ranging from educational
                    platforms to e-commerce marketplaces, always prioritizing
                    clean code, maintainability, and user experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-1 sm:gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="card-hover border-0 shadow-md bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-[#4EA5D9] mb-4 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold text-[#1F2D5A] mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-[#2E2E2E]">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
