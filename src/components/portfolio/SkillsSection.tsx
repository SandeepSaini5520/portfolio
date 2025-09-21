import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Frameworks",
      skills: ["React", "Next.js", "TypeScript", "JavaScript"],
      color: "bg-primary"
    },
    {
      category: "Styling & UI",
      skills: ["Tailwind CSS", "CSS3", "HTML5", "Bootstrap"],
      color: "bg-secondary"
    },
    {
      category: "Headless CMS",
      skills: ["Frontastic", "Commercetools", "Contentstack"],
      color: "bg-primary"
    },
    {
      category: "Tools & Workflow",
      skills: ["Git", "VS Code", "JIRA", "Confluence"],
      color: "bg-secondary"
    },
    {
      category: "Libraries",
      skills: ["React Hook Form", "React Query", "Formik", "jsPDF"],
      color: "bg-primary"
    },
    {
      category: "Best Practices",
      skills: ["WCAG Accessibility", "Core Web Vitals", "SSR", "Responsive Design"],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
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
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10 }}
                        className="flex items-center space-x-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-3 h-3 rounded-full ${category.color}`}
                        />
                        <Badge 
                          variant="secondary" 
                          className="text-sm font-medium bg-accent hover:bg-primary hover:text-white transition-colors"
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
          className="mt-16"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
                Core Expertise
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { skill: "React & Next.js", level: 90 },
                  { skill: "TypeScript", level: 85 },
                  { skill: "Accessibility", level: 88 },
                  { skill: "Performance", level: 87 }
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
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-muted"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeLinecap="round"
                          className="text-primary"
                          initial={{ strokeDasharray: "251.2", strokeDashoffset: "251.2" }}
                          whileInView={{ strokeDashoffset: `${251.2 - (251.2 * item.level) / 100}` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-semibold text-foreground">
                          {item.level}%
                        </span>
                      </div>
                    </div>
                    <p className="font-medium text-foreground">{item.skill}</p>
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