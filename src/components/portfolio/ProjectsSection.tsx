import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Palette, ShoppingBag, GraduationCap } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Scholastic Art and Writing Platform",
      description: "A comprehensive platform enabling students to share and showcase their artistic and written works. Built with accessibility-first approach following WCAG standards.",
      icon: <GraduationCap className="h-6 w-6" />,
      technologies: ["React", "TypeScript", "React Hook Form", "React Query", "WCAG"],
      features: [
        "Accessible React components with keyboard navigation",
        "Cross-browser compatibility testing",
        "Form management with React Hook Form",
        "Efficient data fetching with React Query",
        "WCAG 2.1 AA compliance"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Shades of Light E-commerce",
      description: "Pixel-perfect, responsive e-commerce website with server-side rendering for optimal performance and SEO. Integrated with Frontastic headless commerce platform.",
      icon: <Palette className="h-6 w-6" />,
      technologies: ["Next.js", "Tailwind CSS", "Frontastic", "Formik", "SSR"],
      features: [
        "Server-side rendered pages for fast loading",
        "Responsive design across all devices",
        "Frontastic CMS integration",
        "Advanced form handling with Formik",
        "SEO-optimized product pages"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Curio Digital Marketplace",
      description: "A sophisticated digital marketplace connecting over 100 global artisans with customers seeking unique handmade furniture, lighting, and art pieces.",
      icon: <ShoppingBag className="h-6 w-6" />,
      technologies: ["React.js", "Next.js", "Contentstack", "jsPDF", "Performance Optimization"],
      features: [
        "Dynamic PDF generation for catalogs",
        "Contentstack CMS for content management",
        "Lazy loading and code splitting",
        "Image compression for faster loading",
        "Core Web Vitals optimization",
        "Multi-vendor marketplace features"
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full border-0 shadow-lg overflow-hidden group">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-accent hover:bg-primary hover:text-white transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                      disabled
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                      disabled
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <Button 
                className="btn-gradient text-white font-medium px-8 py-3"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;