import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Headquarters",
      details: ["123 Innovation Drive", "Tech Valley, CA 94025", "United States"],
      color: "text-primary"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: ["hello@Neurootix.com", "support@Neurootix.com", "careers@Neurootix.com"],
      color: "text-accent"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "24/7 Support Available"],
      color: "text-primary"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM PST", "Weekend Support Available", "Emergency: 24/7"],
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Contact Our Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Connect With Our Team of
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Innovators
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're always excited to discuss new ideas and collaborations. 
            Reach out to explore how we can transform your vision into cutting-edge reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project or inquiry..."
                    rows={6}
                    required
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${info.color} bg-muted/20 p-3 rounded-lg group-hover:animate-pulse`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Response Time Badge */}
            <div className="bg-gradient-card rounded-lg p-6 border border-border/50 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Response Guarantee</h3>
                <Badge className="bg-accent text-accent-foreground">
                  24 Hour Response
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">General Inquiries</span>
                  <span className="text-accent font-medium">Within 4 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Project Consultations</span>
                  <span className="text-primary font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Technical Support</span>
                  <span className="text-accent font-medium">Within 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;