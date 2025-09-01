import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Rocket } from "lucide-react";

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
        <div className="text-center mb-16">
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
            At Neurootix, we specialize in providing innovative and personalized Artificial Intelligence solutions to businesses of all sizes and industries. 
            With our highly skilled team of data scientists, software engineers, and AI experts, we aim to revolutionize how companies manage their data 
            and automate processes for optimal performance.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow-accent/20 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="text-accent mb-3 flex justify-center group-hover:animate-pulse">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 border border-border/50 shadow-card mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To pioneer the next generation of intelligent systems that seamlessly integrate artificial intelligence, 
                robotics, and data science to solve real-world challenges. We believe in building technology that 
                not only meets today's needs but anticipates tomorrow's opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From quantum-ready algorithms to intuitive user interfaces, we create comprehensive solutions 
                that transform businesses and empower innovation across industries.
              </p>
            </div>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-gradient-accent rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Focus */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            At the Forefront of Technology
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            We specialize in emerging technologies that are shaping the future: quantum computing, 
            artificial intelligence, blockchain, IoT, and advanced robotics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Artificial Intelligence", "Machine Learning", "Robotics", "Data Science", "Quantum Computing", "Blockchain", "IoT", "Cybersecurity"].map((tech, index) => (
              <div 
                key={index}
                className="bg-muted/30 border border-border/50 rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;