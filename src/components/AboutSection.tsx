import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { number: "100+", label: "Clients Worldwide", icon: <Users className="h-6 w-6" /> },
    { number: "200+", label: "Projects Completed", icon: <Target className="h-6 w-6" /> },
    { number: "15+", label: "Countries Served", icon: <Lightbulb className="h-6 w-6" /> },
    { number: "∞", label: "Innovations", icon: <Rocket className="h-6 w-6" /> }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      title: "Quality Excellence",
      description: "Every project is crafted with meticulous attention to detail and the highest standards of quality."
    },
    {
      title: "Future-Ready",
      description: "Our solutions are built to scale and adapt to tomorrow's technological landscape."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">About Neurootix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Where Science Meets
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Software Engineering
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Neurootix, we specialize in providing innovative and personalized Artificial Intelligence solutions...
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-accent/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-accent mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="bg-gradient-card rounded-2xl p-8 lg:p-12 border border-border/50 shadow-card mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To pioneer the next generation of intelligent systems...
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From quantum-ready algorithms to intuitive user interfaces...
              </p>
            </div>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-accent rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technologies Focus */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            At the Forefront of Technology
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            We specialize in emerging technologies that are shaping the future...
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Artificial Intelligence", "Machine Learning", "Robotics", "Data Science",
              "Quantum Computing", "Blockchain", "IoT", "Cybersecurity"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-muted/30 border border-border/50 rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
