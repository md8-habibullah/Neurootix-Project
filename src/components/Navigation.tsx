import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/neurootix-logo-site.png"; // Ensure the logo is imported"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src={logo}
              alt="Neurootix Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-14 w-auto object-contain" // adjust size as needed
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-3 py-2 rounded-md text-foreground/80 hover:text-foreground transition-colors duration-200 ${location.pathname === item.href
                      ? "text-primary bg-muted/50"
                      : ""
                    }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Get Started
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-card">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMenu}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${location.pathname === item.href
                        ? "text-primary bg-muted/50"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link to="/contact" onClick={closeMenu}>
                    <Button className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
