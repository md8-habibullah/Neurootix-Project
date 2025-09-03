import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Database, Code2, Smartphone, Camera, Palette, Cog, Zap } from "lucide-react";
// import servicesImage from "@/assets/services-icons.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Strategy Advisory & Consulting Services",
      description: "Creating tailored AI roadmaps for operational excellence, strategic growth, and competitive advantage, informed by deep industry insights and seamless organizational integration.",
      technologies: ["AI Strategy", "Business Analysis", "Consulting", "Planning"],
      color: "text-primary"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "AI Development Services",
      description: "Implementing AI requires analysis, design, and adaptation. The fusion of data and technology creates agile and intelligent solutions for businesses.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Custom Models"],
      color: "text-accent"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Enterprise AI Solutions",
      description: "We optimize data and algorithms for precise solutions. Adaptability and continuous learning are key in technological evolution.",
      technologies: ["Enterprise AI", "Scalable Systems", "Integration", "Security"],
      color: "text-primary"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Implementing Machine Learning requires exploration, modeling, and optimization. The combination of algorithms and data delivers predictive and automated solutions.",
      technologies: ["Scikit-learn", "Keras", "XGBoost", "MLflow"],
      color: "text-accent"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Business Process Automation",
      description: "Business Process Automation requires strategy, integration, and continuous improvement. The synergy between workflows and technology streamlines operations.",
      technologies: ["RPA", "Workflow Design", "Integration", "Optimization"],
      color: "text-primary"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analysis and Big Data",
      description: "Implementing Data Analysis and Big Data requires collection, processing, and interpretation. The integration of massive datasets with analytical tools uncovers patterns.",
      technologies: ["Python", "R", "Apache Spark", "Tableau"],
      color: "text-accent"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "AI Courses and Training",
      description: "Learn how to leverage artificial intelligence solutions to boost productivity in your company without making significant investments, only through knowledge.",
      technologies: ["Training Programs", "Workshops", "Certification", "Support"],
      color: "text-primary"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Cybersecurity + AI",
      description: "Cybersecurity with AI requires vigilance, automation, and adaptive learning. The fusion of intelligent algorithms and security protocols enables real-time threat detection.",
      technologies: ["AI Security", "Threat Detection", "Automation", "Defense"],
      color: "text-accent"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Cog className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-sm font-medium text-primary">Our Technical Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of AI services, including data analysis, recommendation systems, pattern recognition, 
            machine learning model development, and real-time AI solution implementation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="pb-4">
                <div className={`${service.color} mb-3 group-hover:animate-pulse`}>
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
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
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Integrated Tech Ecosystem
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our services work together seamlessly, allowing us to deliver comprehensive solutions 
              that combine multiple technologies for maximum impact and innovation.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                Explore Our Process
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                View Case Studies
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;