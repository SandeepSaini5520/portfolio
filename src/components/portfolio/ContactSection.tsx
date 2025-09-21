import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "official.sandeepsaini05@gmail.com",
      href: "mailto:official.sandeepsaini05@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 8295034479",
      href: "tel:+918295034479"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Noida, India 201301",
      href: null
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "sandeep-saini-143287231",
      href: "https://linkedin.com/in/sandeep-saini-143287231"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:official.sandeepsaini05@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the message pre-filled.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SandeepSaini_Resume.pdf';
    link.download = 'SandeepSaini_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new opportunities 
            and collaborate on innovative projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  I'm based in Noida, India, and I'm always open to discussing new opportunities, 
                  freelance projects, or just having a chat about frontend development.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-primary hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-white hover:border-primary"
                      asChild
                    >
                      <a href="https://linkedin.com/in/sandeep-saini-143287231" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-white hover:border-primary"
                      asChild
                    >
                      <a href="https://github.com/sandeepsaini" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-white hover:border-primary"
                      asChild
                    >
                      <a href="mailto:official.sandeepsaini05@gmail.com">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Resume Download */}
                <div className="mt-8 pt-8 border-t">
                  <Button 
                    onClick={handleDownloadResume}
                    className="w-full btn-gradient text-white font-medium"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download My Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-gradient text-white font-medium py-3"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  This form will open your email client with the message pre-filled.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;