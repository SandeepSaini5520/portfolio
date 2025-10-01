import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Download,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = "service_j4epz7i";
const EMAILJS_TEMPLATE_ID = "template_kr95bpq";
const EMAILJS_USER_ID = "MA7W3Op1QrNpjqhA4"; // or public key

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "official.sandeepsaini05@gmail.com",
      href: "mailto:official.sandeepsaini05@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 8295034479",
      href: "tel:+918295034479",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Noida, India 201301",
      href: null,
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "sandeep-saini-143287231",
      href: "https://linkedin.com/in/sandeep-saini-143287231",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_USER_ID
      );
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/SandeepSaini_Resume.pdf";
    link.download = "SandeepSaini_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className=" bg-accent">
      <div className="container mx-auto px-4 py-5 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 sm:text-2xl">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto sm:text-base">
            Ready to bring your ideas to life? I'm always excited to discuss new
            opportunities and collaborate on innovative projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:grid-cols-1 sm:gap-6">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-4 w-full"
          >
            <Card className="border-0 shadow-lg sm:mb-6 w-full max-w-full">
              <CardContent className="p-8 sm:p-4">
                <h3 className="text-2xl font-bold text-foreground mb-6 sm:text-xl">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-8 sm:mb-4 sm:text-base">
                  I'm based in Noida, India, and I'm always open to discussing
                  new opportunities, freelance projects, or just having a chat
                  about frontend development.
                </p>
                <div className="space-y-6 sm:space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 sm:gap-2"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary sm:w-10 sm:h-10">
                        {info.icon}
                      </div>
                      <div className="truncate max-w-[70vw]">
                        <p className="font-medium text-foreground sm:text-base">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-primary hover:underline break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground break-all">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Social Links */}
                {/* <div className="mt-8 pt-8 border-t">
                  <h4 className="font-semibold text-foreground mb-4 sm:text-base">
                    Follow Me
                  </h4>
                  <div className="flex gap-4 flex-wrap">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-white hover:border-primary"
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
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-white hover:border-primary"
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
                </div> */}
                {/* Resume Download */}
                <div className="mt-8 pt-8 border-t">
                  <Button
                    onClick={handleDownloadResume}
                    className="w-full btn-gradient text-white font-medium sm:text-base sm:py-2"
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
            className="w-full"
          >
            <Card className="border-0 shadow-lg sm:mb-6 w-full max-w-full">
              <CardContent className="p-8 sm:p-4">
                <h3 className="text-2xl font-bold text-foreground mb-6 sm:text-xl">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6 sm:grid-cols-1 sm:gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-foreground font-medium sm:text-base"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 w-full"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-foreground font-medium sm:text-base"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 w-full"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-foreground font-medium sm:text-base"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2 w-full"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-foreground font-medium sm:text-base"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 w-full"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    />
                  </div>
                  <div className="mt-8 pt-8 border-t">
                    <Button
                      type="submit"
                      className="w-full btn-gradient text-white font-medium py-3 sm:text-base sm:py-2"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5 " />
                      Send Message
                    </Button>
                  </div>
                </form>
                <p className="text-sm text-muted-foreground mt-4 text-center sm:text-xs">
                  This form will open your email client with the message
                  pre-filled.
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
