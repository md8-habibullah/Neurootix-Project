
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Mukim",
      role: "Founder & Chairman",
      expertise: "Data Scientist & Graphics Designer",
      description: "Visionary leader driving strategic innovation in data science and creative design.",
      specialties: ["Data Science", "Graphics Design", "Robotics", "Strategic Vision"]
    },
    {
      name: "Pushpita Apu",
      role: "COO & HR",
      expertise: "AI/ML Engineer",
      description: "Operations expert specializing in artificial intelligence and machine learning solutions.",
      specialties: ["AI/ML Engineering", "Operations Management", "Human Resources", "Team Leadership"]
    },
    {
      name: "Rocky",
      role: "CTO",
      expertise: "Mobile Application Developer (Flutter) & Graphics Designer",
      description: "Technical leader driving mobile innovation and creative design excellence.",
      specialties: ["Flutter Development", "Mobile Apps", "Graphics Design", "Technical Leadership"]
    },
    {
      name: "Lami",
      role: "CIO",
      expertise: "Software Engineer",
      description: "IT infrastructure expert managing scalable software systems and architecture.",
      specialties: ["Software Engineering", "System Architecture", "IT Infrastructure", "Development"]
    },
    {
      name: "Foyaz",
      role: "CEO",
      expertise: "Business Development Manager & Marketing Expert",
      description: "Business growth strategist driving market expansion and client relationships.",
      specialties: ["Business Development", "Marketing Strategy", "Client Relations", "Growth Management"]
    },
    {
      name: "Antu",
      role: "Creative Executive",
      expertise: "Branding & Digital Marketing Expert",
      description: "Brand strategist crafting compelling digital experiences and marketing campaigns.",
      specialties: ["Brand Strategy", "Digital Marketing", "Creative Direction", "Campaign Management"]
    },
    {
      name: "Mehedi",
      role: "Web Developer",
      expertise: "Marketing & Web Development",
      description: "Full-stack developer creating scalable web solutions with marketing integration.",
      specialties: ["Web Development", "Full-Stack", "Marketing Integration", "Scalable Solutions"]
    },
    {
      name: "Habibullah",
      role: "Security Engineer",
      expertise: "Cyber Security Engineer",
      description: "Security specialist ensuring robust protection for digital systems and data.",
      specialties: ["Cybersecurity", "Threat Detection", "System Security", "Compliance"]
    },
    {
      name: "Yousuf",
      role: "IoT Developer & Finance Executive",
      expertise: "IoT Developer (Robotics) & Finance Executive",
      description: "Innovation expert combining IoT development with financial strategy.",
      specialties: ["IoT Development", "Robotics", "Financial Management", "Innovation Strategy"]
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
              About Neorootix
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Where science meets software engineering to create the future
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground">Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Company Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Neorootix is a dynamic technology solutions provider, delivering innovative services in Data Science, 
                ML/AI, Robotics/IoT, Cybersecurity, Graphics Design, Software Development, and Digital Marketing. 
                Founded by Mukim, a visionary Data Scientist and Graphics Designer, our firm is driven by a talented 
                team of experts.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                Since our inception, we've empowered businesses worldwide with data-driven insights, secure systems, 
                and transformative digital experiences. We blend cutting-edge research with practical engineering to 
                build software that redefines what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Harness the power of technology to solve real-world challenges, delivering tailored solutions 
                  that drive business success through collaboration, creativity, and excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be a global leader in scalable, secure, and creative IT solutions, transforming businesses 
                  and communities with Data Science, AI, IoT, and digital innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The minds pioneering our technological evolution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                    <p className="text-sm text-primary font-medium mb-3">{member.expertise}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {member.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;