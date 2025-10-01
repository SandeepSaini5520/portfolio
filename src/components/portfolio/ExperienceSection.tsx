import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experience = {
    company: "Icreon Communication Pvt Ltd",
    subtitle: "(formerly ChangeCX India Pvt Ltd)",
    position: "Frontend Developer",
    duration: "July 2022 - June 2024",
    location: "Noida, India",
    description:
      "Developed responsive, accessible web applications using modern frontend technologies, focusing on performance optimization and user experience.",
    projects: [
      {
        name: "Scholastic Art and Writing",
        description:
          "Created a platform for students to share art and writing with full accessibility compliance",
        technologies: ["React", "TypeScript", "React Hook Form", "React Query"],
        achievements: [
          "Developed and enhanced different React components",
          "Ensured full cross-browser compatibility and keyboard accessibility",
          "Followed WCAG standards for better user experience",
          "Effectively employed React Hook Form and React Query libraries",
        ],
      },
      {
        name: "Shades of Light",
        description:
          "Led development of pixel-perfect, responsive web pages with SSR capabilities",
        technologies: ["Next.js", "HTML", "CSS", "Tailwind", "Frontastic"],
        achievements: [
          "Built pixel-perfect, responsive web pages",
          "Designed SSR-enabled React components for fast, SEO-friendly pages",
          "Configured frontend components based on Frontastic schema",
          "Utilized Formik libraries for form management",
          "Increased accessibility while improving page performance",
        ],
      },
      {
        name: "Curio",
        description:
          "Developed a digital marketplace for curated handmade furniture and art from 100+ global artisans",
        technologies: [
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Frontastic",
          "Contentstack",
          "jsPDF",
        ],
        achievements: [
          "Built engaging user platforms with React.js",
          "Introduced dynamic PDF creation with jsPDF implementation",
          "Utilized Contentstack CMS for static content management",
          "Collaborated with cross-functional teams for scalable solutions",
          "Implemented performance optimization techniques (lazy loading, code splitting, image compression)",
          "Improved Core Web Vitals and page load speed",
        ],
      },
    ],
  };

  const education = {
    degree: "Bachelor's in Computer Applications",
    institution: "Dolphin PG College Science & Agriculture's",
    location: "Chunni Kalan, Punjab",
    year: "2020",
  };

  return (
    <section id="experience" className="py-20 bg-accent">
      <div className="container mx-auto px-4 py-20 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 sm:text-2xl">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto sm:text-base">
            Professional journey and continuous learning in frontend development
          </p>
        </motion.div>
        <div className="space-y-12 sm:space-y-6">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg sm:mb-8">
              <CardHeader className="pb-4 sm:pb-2">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Building className="h-6 w-6 text-primary" />
                      {experience.company}
                    </h3>
                    <p className="text-muted-foreground">
                      {experience.subtitle}
                    </p>
                    <p className="text-xl font-semibold text-primary mt-2">
                      {experience.position}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-8 sm:mb-4">
                  {experience.description}
                </p>
                <div className="space-y-8 sm:space-y-4">
                  {experience.projects.map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-primary pl-6"
                    >
                      <h4 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                        {project.name}
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + i * 0.05,
                            }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5 sm:mb-8">
              <CardContent className="p-8 sm:p-4">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 sm:text-xl">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🎓</span>
                  </div>
                  Education
                </h3>
                <div className="grid md:grid-cols-2 gap-6 sm:grid-cols-1 sm:gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {education.degree}
                    </h4>
                    <p className="text-muted-foreground mb-1">
                      {education.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {education.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="outline"
                      className="text-lg px-4 py-2 border-primary text-primary"
                    >
                      {education.year}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
