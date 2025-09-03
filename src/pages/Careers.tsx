import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Zap, 
  Heart,
  TrendingUp,
  Code,
  Brain,
  Shield,
  Smartphone
} from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Data Scientist",
      department: "Data Science",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$90,000 - $130,000",
      experience: "3-5 years",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Join our data science team to build predictive models and analytics solutions.",
      requirements: ["Python/R expertise", "Machine Learning", "Statistical Analysis", "SQL"],
      team: "Led by Mukim"
    },
    {
      title: "AI/ML Engineer",
      department: "Artificial Intelligence",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$95,000 - $140,000",
      experience: "2-4 years",
      icon: <Brain className="h-6 w-6" />,
      description: "Develop and deploy machine learning models and AI solutions for our clients.",
      requirements: ["TensorFlow/PyTorch", "Deep Learning", "MLOps", "Cloud Platforms"],
      team: "Led by Pushpita Apu"
    },
    {
      title: "Flutter Developer",
      department: "Mobile Development",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$70,000 - $100,000",
      experience: "2-3 years",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Build beautiful cross-platform mobile applications using Flutter framework.",
      requirements: ["Flutter/Dart", "Mobile UI/UX", "Firebase", "API Integration"],
      team: "Led by Rocky"
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "On-site",
      type: "Full-time",
      salary: "$85,000 - $120,000",
      experience: "3-6 years",
      icon: <Shield className="h-6 w-6" />,
      description: "Protect our clients' digital assets with advanced security solutions and monitoring.",
      requirements: ["Penetration Testing", "Security Audits", "SIEM Tools", "Compliance"],
      team: "Led by Habibullah"
    },
    {
      title: "Full-Stack Developer",
      department: "Software Development",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$75,000 - $110,000",
      experience: "2-4 years",
      icon: <Code className="h-6 w-6" />,
      description: "Develop scalable web applications using modern technologies and frameworks.",
      requirements: ["React/Node.js", "Database Design", "Cloud Services", "DevOps"],
      team: "Led by Lami & Mehedi"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$55,000 - $80,000",
      experience: "2-3 years",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Drive growth through strategic digital marketing campaigns and analytics.",
      requirements: ["SEO/SEM", "Social Media", "Content Strategy", "Analytics"],
      team: "Led by Foyaz & Antu"
    }
  ];

  const internshipPrograms = [
    {
      title: "Data Science Internship",
      duration: "3-6 months",
      stipend: "$1,500/month",
      description: "Learn data analysis, visualization, and machine learning under expert guidance."
    },
    {
      title: "Software Development Internship",
      duration: "3-6 months",
      stipend: "$1,200/month",
      description: "Gain hands-on experience building web and mobile applications."
    },
    {
      title: "AI/ML Research Internship",
      duration: "6 months",
      stipend: "$1,800/month",
      description: "Work on cutting-edge AI research projects and model development."
    },
    {
      title: "Cybersecurity Internship",
      duration: "4-6 months",
      stipend: "$1,400/month",
      description: "Learn security testing, threat analysis, and protection strategies."
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Salary",
      description: "Market-leading compensation packages with performance bonuses"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive environment"
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
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build the future of technology with a team of passionate innovators
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground">Expert Leaders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Remote Friendly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Growth Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Neorootix?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We foster innovation, embrace diversity, and create an environment where technology 
              professionals can thrive and make a meaningful impact.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 bg-muted/30">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4 text-primary-foreground">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our expert teams and work on cutting-edge projects that shape the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg text-primary-foreground">
                        {job.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">{job.department}</Badge>
                          <Badge variant="outline" className="text-xs">{job.team}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {job.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {job.experience}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Requirements</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow-primary">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Internship Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Launch your tech career with hands-on experience and mentorship from industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internshipPrograms.map((program, index) => (
              <Card key={index} className="text-center border-0 shadow-elegant bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4 text-primary-foreground">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Stipend:</span>
                      <span className="font-medium text-primary">{program.stipend}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {program.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Apply for Internship
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Shape the Future?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't see the perfect role? We're always looking for exceptional talent to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary">
                  Send Your Resume
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;