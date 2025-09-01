import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Bot, MessageCircle, Code, Search, Cog, Warehouse, Megaphone } from "lucide-react";

const AISolutionsSection = () => {
  const solutions = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Recommendation System",
      description: "An AI-powered recommendation system to enhance sales performance.",
      color: "text-primary"
    },
    {
      icon: <Bot className="h-12 w-12" />,
      title: "AI-Powered Call Center",
      description: "Create and automate a call center using artificial intelligence.",
      color: "text-accent"
    },
    {
      icon: <MessageCircle className="h-12 w-12" />,
      title: "Chatbot / Voice bot",
      description: "Bots trained to enhance the quality of text and voice customer support.",
      color: "text-primary"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Custom Development",
      description: "We develop advanced algorithms for AI models.",
      color: "text-accent"
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "AI SEO",
      description: "We design intelligent algorithms to enhance SEO performance with AI.",
      color: "text-primary"
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Robotic Process Automation",
      description: "We build smart workflows powered by Robotic Process Automation to streamline repetitive tasks.",
      color: "text-accent"
    },
    {
      icon: <Warehouse className="h-12 w-12" />,
      title: "Warehouse Automation",
      description: "We develop intelligent systems for Warehouse Automation to optimize inventory management and logistics.",
      color: "text-primary"
    },
    {
      icon: <Megaphone className="h-12 w-12" />,
      title: "Generative AI for Marketing",
      description: "We develop advanced algorithms for AI models to revolutionize marketing and advertising.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Brain className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive AI solutions designed to transform your business operations and drive growth through intelligent automation.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-glow-accent/20 transition-all duration-300 hover:-translate-y-1 group text-center"
            >
              <CardHeader className="pb-4">
                <div className={`${solution.color} mb-4 flex justify-center group-hover:animate-pulse`}>
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-accent hover:shadow-glow-accent transition-all duration-300">
                See All Solutions
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Quote Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;