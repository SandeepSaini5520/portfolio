import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Frameworks",
      skills: ["React", "Next.js", "TypeScript", "JavaScript"],
      color: "bg-primary",
    },
    {
      category: "Styling & UI",
      skills: ["Tailwind CSS", "CSS3", "HTML5", "Bootstrap"],
      color: "bg-secondary",
    },
    {
      category: "Headless CMS",
      skills: ["Frontastic", "Commercetools", "Contentstack"],
      color: "bg-primary",
    },
    {
      category: "Tools & Workflow",
      skills: ["Git", "VS Code", "JIRA", "Confluence"],
      color: "bg-secondary",
    },
    {
      category: "Libraries",
      skills: ["React Hook Form", "React Query", "Formik", "jsPDF"],
      color: "bg-primary",
    },
    {
      category: "Best Practices",
      skills: [
        "WCAG Accessibility",
        "Core Web Vitals",
        "SSR",
        "Responsive Design",
      ],
      color: "bg-secondary",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20"
      style={{
        background: "linear-gradient(90deg, #f8fafc 0%, #e2e8f0 100%)", // high-contrast light gradient
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-8"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 sm:text-2xl"
            style={{ color: "#1a202c" }} // strong dark text
          >
            Skills & Technologies
          </h2>
          <p
            className="max-w-2xl mx-auto sm:text-base"
            style={{ color: "#374151" }} // medium-dark for subtitle
          >
            A comprehensive toolkit for building modern, scalable web
            applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:grid-cols-1 sm:gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="card-hover h-full border-0 shadow-lg"
                style={{
                  background: "#fff", // white card for max contrast
                  color: "#1a202c",
                }}
              >
                <CardContent className="p-6">
                  <h3
                    className="text-xl font-semibold mb-6 text-center"
                    style={{ color: "#1a202c" }}
                  >
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10 }}
                        className="flex items-center space-x-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-3 h-3 rounded-full"
                          style={{
                            background:
                              category.color === "bg-primary"
                                ? "#2563eb" // blue-600
                                : "#d97706", // amber-600
                          }}
                        />
                        <Badge
                          variant="secondary"
                          className="text-sm font-medium transition-colors"
                          style={{
                            background:
                              category.color === "bg-primary"
                                ? "#2563eb"
                                : "#d97706",
                            color: "#fff",
                          }}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Progress Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-8"
        >
          <Card
            className="border-0 shadow-lg"
            style={{
              background: "linear-gradient(90deg, #e0e7ff 0%, #fef3c7 100%)", // blue to amber gradient
              color: "#1a202c",
            }}
          >
            <CardContent className="p-8 sm:p-4">
              <h3
                className="text-2xl font-semibold text-center mb-8 sm:text-xl"
                style={{ color: "#1a202c" }}
              >
                Core Expertise
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:grid-cols-1 sm:gap-4">
                {[
                  { skill: "React & Next.js", level: 90 },
                  { skill: "TypeScript", level: 85 },
                  { skill: "Accessibility", level: 88 },
                  { skill: "Performance", level: 87 },
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg
                        className="w-24 h-24 transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#e5e7eb" // gray-200 for muted
                          strokeWidth="8"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke={
                            index === 0
                              ? "#2563eb" // blue-600
                              : index === 1
                              ? "#d97706" // amber-600
                              : index === 2
                              ? "#059669" // emerald-600
                              : "#be185d" // pink-700
                          }
                          strokeWidth="8"
                          fill="transparent"
                          strokeLinecap="round"
                          initial={{
                            strokeDasharray: "251.2",
                            strokeDashoffset: "251.2",
                          }}
                          whileInView={{
                            strokeDashoffset: `${
                              251.2 - (251.2 * item.level) / 100
                            }`,
                          }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-lg font-semibold"
                          style={{ color: "#1a202c" }}
                        >
                          {item.level}%
                        </span>
                      </div>
                    </div>
                    <p className="font-medium" style={{ color: "#1a202c" }}>
                      {item.skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
