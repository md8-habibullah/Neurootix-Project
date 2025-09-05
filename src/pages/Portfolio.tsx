import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  Star, 
  Database, 
  Brain, 
  Shield, 
  Smartphone,
  Globe,
  TrendingUp
} from "lucide-react";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "E-Commerce Analytics Dashboard",
      client: "RetailTech Solutions",
      category: "Data Science",
      lead: "Mukim",
      description: "Built a comprehensive analytics platform that increased sales insights by 300% and reduced decision-making time by 60%.",
      technologies: ["Python", "Tableau", "PostgreSQL", "Apache Spark"],
      results: ["300% increase in data insights", "60% faster decision making", "40% improvement in inventory management"],
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "AI-Powered Customer Support",
      client: "TechCorp International",
      category: "AI/ML",
      lead: "Pushpita Apu",
      description: "Developed an intelligent chatbot system that handles 80% of customer queries automatically with 95% accuracy.",
      technologies: ["TensorFlow", "OpenAI API", "React", "Node.js"],
      results: ["80% automation rate", "95% accuracy", "50% reduction in response time"],
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Smart Factory IoT System",
      client: "Manufacturing Plus",
      category: "IoT/Robotics",
      lead: "Yousuf",
      description: "Implemented IoT sensors and automation that improved production efficiency by 45% and reduced downtime by 70%.",
      technologies: ["Arduino", "MQTT", "InfluxDB", "Grafana"],
      results: ["45% efficiency improvement", "70% less downtime", "Real-time monitoring"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Enterprise Security Audit",
      client: "FinanceSecure Bank",
      category: "Cybersecurity",
      lead: "Habibullah",
      description: "Conducted comprehensive security assessment and implemented multi-layer protection reducing vulnerabilities by 90%.",
      technologies: ["Kali Linux", "Metasploit", "SIEM", "Firewall Config"],
      results: ["90% vulnerability reduction", "Zero security incidents", "Compliance achieved"],
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Mobile Banking App",
      client: "NextGen Financial",
      category: "Software Development",
      lead: "Rocky & Lami",
      description: "Developed a secure, user-friendly mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
      results: ["500K+ downloads", "4.8 app store rating", "99.9% uptime"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Digital Marketing Campaign",
      client: "StartupGrow",
      category: "Digital Marketing",
      lead: "Foyaz & Antu",
      description: "Executed integrated digital marketing strategy that increased online visibility by 400% and lead generation by 250%.",
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Social APIs"],
      results: ["400% visibility increase", "250% more leads", "300% ROI improvement"],
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "RetailTech Solutions",
      role: "CTO",
      content: "Neurootix transformed our data infrastructure completely. The analytics dashboard they built has become the cornerstone of our decision-making process.",
      rating: 5,
      service: "Data Science"
    },
    {
      name: "Michael Chen",
      company: "TechCorp International",
      role: "Customer Success Manager",
      content: "The AI chatbot solution exceeded our expectations. Customer satisfaction increased by 40% while our support costs decreased significantly.",
      rating: 5,
      service: "AI/ML"
    },
    {
      name: "Amanda Rodriguez",
      company: "Manufacturing Plus",
      role: "Operations Director",
      content: "The IoT implementation revolutionized our production line. We now have real-time visibility into every aspect of our manufacturing process.",
      rating: 5,
      service: "IoT/Robotics"
    },
    {
      name: "David Kim",
      company: "FinanceSecure Bank",
      role: "CISO",
      content: "Their cybersecurity audit was thorough and professional. The security improvements they implemented have given us complete peace of mind.",
      rating: 5,
      service: "Cybersecurity"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Showcasing successful projects that demonstrate our expertise and impact
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed examples of how we've helped businesses achieve their technology goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-primary p-2 rounded-lg text-primary-foreground">
                        {study.icon}
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs mb-2">
                          {study.category}
                        </Badge>
                        <CardTitle className="text-lg">{study.title}</CardTitle>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Client:</strong> {study.client} | <strong>Lead:</strong> {study.lead}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Full Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What our clients say about working with Neurootix
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                    <Badge variant="secondary">{testimonial.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Next Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our growing list of satisfied clients and transform your business with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;