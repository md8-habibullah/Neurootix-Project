import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Github, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/neurootix-logo-site.png"; // Ensure the logo is imported

const Footer = () => {
  
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const scrollToSection = (href: string, route?: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);

      if (element) {
        // Already on the page, just scroll
        element.scrollIntoView({ behavior: "smooth" });
      } else if (route) {
        // Navigate to route + hash
        navigate(`${route}${href}`);
      }
    } else {
      // If it's a normal route
      navigate(route || href);
    }
  };


  return (
    <footer className="bg-gradient-to-t from-background/80 to-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-start mb-6">
              <motion.img
                src={logo}
                alt="Neurootix Logo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Pioneering the future through artificial intelligence, robotics,
              and cutting-edge technology. Where innovation meets execution.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                contact@neurootix.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                Coming Soon
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                Airport - 1230, Dhaka
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="mailto:contact@neurootix.com">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-9 w-9 p-0 hover:text-primary hover:bg-primary/10 hover:shadow-glow-primary/30"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://github.com/md8-habibullah/Neurootix-Project.git">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-9 w-9 p-0 hover:text-accent hover:bg-accent/10 hover:shadow-glow-accent/30"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.facebook.com/neurootix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-9 w-9 p-0 hover:text-primary hover:bg-primary/10 hover:shadow-glow-primary/30"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#products")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  AI & Machine Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#products")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Robotics Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#products")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Data Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#products")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#products")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Mobile Apps
                </button>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#about", "/about")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#team", "/about")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Neurootix. All rights reserved.
          </div>

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
