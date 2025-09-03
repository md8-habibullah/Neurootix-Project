import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Cpu, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI & Machine Learning", href: "#products" },
        { name: "Robotics Solutions", href: "#products" },
        { name: "Data Science", href: "#products" },
        { name: "Software Development", href: "#products" },
        { name: "Mobile Apps", href: "#products" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "Case Studies", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "White Papers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#contact" }
      ]
    }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-background/80 to-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-primary p-2 rounded-lg shadow-glow-primary/50">
                <Cpu className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Neurootix
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Pioneering the future through artificial intelligence, robotics, and cutting-edge technology.
              Where innovation meets execution.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                hello@Neurootix.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                Tech Valley, CA 94025
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="ghost"
                className="h-9 w-9 p-0 hover:text-primary hover:bg-primary/10 hover:shadow-glow-primary/30"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-9 w-9 p-0 hover:text-accent hover:bg-accent/10 hover:shadow-glow-accent/30"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-9 w-9 p-0 hover:text-primary hover:bg-primary/10 hover:shadow-glow-primary/30"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Neurootix. All rights reserved.</div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </button>
            </div>

            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;