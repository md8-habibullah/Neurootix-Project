import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      expertise: "AI Research & Strategy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c720?w=400&h=400&fit=crop&crop=face",
      bio: "Leading AI researcher with 15+ years in machine learning and neural networks.",
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@Neurootix.com"
      }
    },
    {
      name: "Alex Rodriguez",
      role: "CTO & Co-Founder", 
      expertise: "Full-Stack Development & Architecture",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary technologist specializing in scalable systems and cloud architecture.",
      social: {
        linkedin: "#",
        github: "#",
        email: "alex@Neurootix.com"
      }
    },
    {
      name: "Maya Patel",
      role: "Head of Robotics",
      expertise: "Robotics Engineering & Automation",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Robotics engineer pioneering autonomous systems and human-robot interaction.",
      social: {
        linkedin: "#",
        github: "#",
        email: "maya@Neurootix.com"
      }
    },
    {
      name: "James Wilson",
      role: "Data Science Director",
      expertise: "Big Data & Analytics",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: "Data scientist with expertise in predictive modeling and statistical analysis.",
      social: {
        linkedin: "#",
        github: "#",
        email: "james@Neurootix.com"
      }
    },
    {
      name: "Lisa Zhang",
      role: "UX Design Lead",
      expertise: "Human-Centered Design",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      bio: "Design expert creating intuitive interfaces for complex technological solutions.",
      social: {
        linkedin: "#",
        github: "#",
        email: "lisa@Neurootix.com"
      }
    },
    {
      name: "David Kumar",
      role: "Cybersecurity Chief",
      expertise: "Security & Risk Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Security expert ensuring robust protection for all our technological solutions.",
      social: {
        linkedin: "#",
        github: "#",
        email: "david@Neurootix.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <ExternalLink className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Leadership Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Minds Pioneering
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Technological Evolution
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our world-class team of engineers, researchers, and visionaries who are 
            driving innovation at the intersection of AI, robotics, and software engineering.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {member.role}
                    </Badge>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    {member.expertise}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 hover:text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={`mailto:${member.social.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join Our Innovation Team
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals who share our passion for 
              pushing the boundaries of technology and creating meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                View Open Positions
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Submit Your Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;