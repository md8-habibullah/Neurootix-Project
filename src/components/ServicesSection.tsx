
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Database, Code2, Smartphone, Palette, Cog, Zap } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Strategy Advisory & Consulting Services",
      description:
        "Creating tailored AI roadmaps for operational excellence, strategic growth, and competitive advantage, informed by deep industry insights and seamless organizational integration.",
      technologies: ["AI Strategy", "Business Analysis", "Consulting", "Planning"],
      color: "text-primary",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "AI Development Services",
      description:
        "Implementing AI requires analysis, design, and adaptation. The fusion of data and technology creates agile and intelligent solutions for businesses.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Custom Models"],
      color: "text-accent",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Enterprise AI Solutions",
      description:
        "We optimize data and algorithms for precise solutions. Adaptability and continuous learning are key in technological evolution.",
      technologies: ["Enterprise AI", "Scalable Systems", "Integration", "Security"],
      color: "text-primary",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Machine Learning",
      description:
        "Implementing Machine Learning requires exploration, modeling, and optimization. The combination of algorithms and data delivers predictive and automated solutions.",
      technologies: ["Scikit-learn", "Keras", "XGBoost", "MLflow"],
      color: "text-accent",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Business Process Automation",
      description:
        "Business Process Automation requires strategy, integration, and continuous improvement. The synergy between workflows and technology streamlines operations.",
      technologies: ["RPA", "Workflow Design", "Integration", "Optimization"],
      color: "text-primary",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analysis and Big Data",
      description:
        "Implementing Data Analysis and Big Data requires collection, processing, and interpretation. The integration of massive datasets with analytical tools uncovers patterns.",
      technologies: ["Python", "R", "Apache Spark", "Tableau"],
      color: "text-accent",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "AI Courses and Training",
      description:
        "Learn how to leverage artificial intelligence solutions to boost productivity in your company without making significant investments, only through knowledge.",
      technologies: ["Training Programs", "Workshops", "Certification", "Support"],
      color: "text-primary",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Cybersecurity + AI",
      description:
        "Cybersecurity with AI requires vigilance, automation, and adaptive learning. The fusion of intelligent algorithms and security protocols enables real-time threat detection.",
      technologies: ["AI Security", "Threat Detection", "Automation", "Defense"],
      color: "text-accent",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Cog className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-sm font-medium text-primary">Our Technical Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of AI services, including data analysis, recommendation
            systems, pattern recognition, machine learning model development, and real-time AI
            solution implementation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-1 group h-full">
                <CardHeader className="pb-4">
                  <motion.div
                    className={`${service.color} mb-3`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Technologies We Use
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 250 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Integrated Tech Ecosystem</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our services work together seamlessly, allowing us to deliver comprehensive solutions
              that combine multiple technologies for maximum impact and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                  Explore Our Process
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
