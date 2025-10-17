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
    <section id="about" className="bg-[#FAFAFA] py-8 md:py-10">
      <div>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5 bg-white"
        >
          <h2 className="text-xl pt-4 md:text-3xl font-bold text-black">
            About Me
          </h2>
          <p className="text-black pb-4 max-w-2xl mx-auto text-base md:text-lg">
            Passionate frontend developer dedicated to creating exceptional user
            experiences
          </p>
        </motion.div>

        <div className=" container grid lg:grid-cols-2 gap-12 items-center">
          {/* About Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-400 shadow-xl bg-[#f8f7f7]">
              <CardContent className="p-6">
                <h3 className="text-2xl text-center font-semibold text-black mb-6">
                  Frontend Developer & Problem Solver
                </h3>
                <div className="space-y-4 text-black text-base">
                  <p>
                    I'm a passionate frontend developer with 2 years of
                    experience in creating responsive, accessible, and
                    user-friendly web applications. Based in{" "}
                    <span className="font-semibold">Noida, India</span>, I
                    specialize in modern web technologies and best practices.
                  </p>
                  <p>
                    My expertise lies in building fast, scalable applications
                    using{" "}
                    <span className="font-semibold">
                      React, Next.js, and TypeScript
                    </span>
                    . I'm particularly focused on creating accessible
                    experiences that follow WCAG standards and deliver excellent
                    Core Web Vitals performance.
                  </p>
                  <p>
                    At{" "}
                    <span className="font-semibold">Icreon Communication</span>,
                    I've worked on diverse projects ranging from educational
                    platforms to e-commerce marketplaces, always prioritizing
                    clean code, maintainability, and user experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-1"
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
                <Card className="border border-gray-300 shadow-md bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-black mb-4 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold text-black mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-black">
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
