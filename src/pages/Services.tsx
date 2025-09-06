import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Brain,
  Smartphone,
  Database,
  Shield,
  Palette,
  Code,
  TrendingUp,
  Bot,
  Cpu,
  Globe
} from "lucide-react";

const Services = () => {

  useEffect(() => {
    const vooo = document.getElementById('ourservices');
    if (vooo) {
      vooo.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const services = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Science",
      lead: "Mukim",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
      features: ["Predictive Analytics", "Business Intelligence", "Data Visualization", "Statistical Modeling"],
      technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "ML/AI Solutions",
      lead: "Pushpita",
      description: "Implement intelligent systems that learn, adapt, and automate business processes.",
      features: ["Machine Learning Models", "AI Automation", "Generative AI", "Natural Language Processing"],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Robotics/IoT",
      lead: "Yousuf",
      description: "Build intelligent connected systems that bridge the physical and digital worlds.",
      features: ["Robotics Automation", "IoT Integration", "Smart Systems", "Industrial Automation"],
      technologies: ["ROS", "Arduino", "Raspberry Pi", "MQTT", "Edge Computing"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      lead: "Habibullah",
      description: "Protect your digital assets with comprehensive security solutions and monitoring.",
      features: ["Threat Detection", "Penetration Testing", "Security Audits", "Compliance Management"],
      technologies: ["Linux", "Metasploit", "Wireshark", "SIEM Tools", "Firewall Management"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphics Design",
      lead: "Rocky & Mukim",
      description: "Create stunning visual experiences that engage and convert your audience.",
      features: ["UI/UX Design", "Brand Identity", "Creative Visualizations", "Motion Graphics"],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "Blender", "After Effects"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      lead: "Lami, Rocky & Mehedi",
      description: "Build scalable, robust applications tailored to your business requirements.",
      features: ["Custom Web Apps", "Mobile Applications", "API Development", "System Integration"],
      technologies: ["React", "Flutter", "Node.js", "Python", "MongoDB", "PostgreSQL"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      lead: "Foyaz & Antu",
      description: "Amplify your brand presence with data-driven marketing strategies.",
      features: ["SEO Optimization", "Social Media Strategy", "Content Marketing", "Performance Analytics"],
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Social Media APIs", "Marketing Automation"]
    }
  ];

  return (
    <div id="ourservices" className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center">
            <h1 id="" className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive technology solutions delivered by industry experts
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">Data Science</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">AI/ML</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">IoT/Robotics</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Cybersecurity</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Software Development</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-primary p-3 rounded-lg text-primary-foreground">
                          {service.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            Led by {service.lead}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow-primary">
                        Request Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our expert team help you leverage cutting-edge technology to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  View Our Vision
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;