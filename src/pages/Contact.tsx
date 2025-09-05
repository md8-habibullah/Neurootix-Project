import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Headphones,
  Globe,
  Send
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";


const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [formResult, setFormResult] = useState('');
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Headquarters",
      details: ["123 Innovation Drive", "Tech District, City 12345", "United States"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["hello@neurootix.com", "support@neurootix.com"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Sunday - Thursday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Friday: Closed"]
    }
  ];

  const services = [
    "Data Science",
    "AI/ML Solutions",
    "Robotics/IoT",
    "Cybersecurity",
    "Graphics Design",
    "Software Development",
    "Digital Marketing",
    "Other"
  ];

  const supportOptions = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Live Chat",
      description: "Get instant support from our team",
      action: "Start Chat",
      available: true
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      action: "Call Now",
      available: true
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      available: true
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormResult("Please wait...");

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("company", company);
    formData.append("service", service);
    formData.append("budget", budget);
    formData.append("message", message);
    formData.append("access_key", "c441252a-645a-4827-9d3d-02a9723d4e24"); // Replace with your actual access key ||| kkkkk

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Form submitted successfully!",
        });
        setFormResult("Form submitted successfully!");
        // Clear form fields after successful submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setService('');
        setBudget('');
        setMessage('');
      } else {
        console.error(data);
        toast({
          title: "Error",
          description: data.message || 'Something went wrong!',
          variant: "destructive",
        });
        setFormResult(`Error: ${data.message || 'Something went wrong!'}`);
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong!",
        variant: "destructive",
      });
      setFormResult("Something went wrong!");
    } finally {
      setTimeout(() => {
        setFormResult("");
      }, 5000); // Clear message after 5 seconds
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your business? Let's discuss your next project
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center text-sm">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                24/7 Support Available
              </div>
              <div className="flex items-center text-sm">
                <Globe className="h-5 w-5 mr-2 text-primary" />
                Global Service Coverage
              </div>
              <div className="flex items-center text-sm">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Instant Response
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-glow-primary bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="h-6 w-6 mr-3 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Abu"
                        className="mt-2"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Hurayra"
                        className="mt-2"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="abu hurayra@example.com"
                      className="mt-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="01xxx-xxxxxx"
                      className="mt-2"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Name"
                      className="mt-2"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Project Budget</Label>
                    <select
                      id="budget"
                      className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">Below $99</option>
                      <option value="15k-50k">$99 - $299</option>
                      <option value="50k-100k">$499 - $1,999</option>
                      <option value="100k+">Above $5,000</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, requirements, and timeline..."
                      className="mt-2 min-h-[120px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow-primary"
                  >
                    Send Message
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                  {formResult && <p className="mt-4 text-center">{formResult}</p>}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're here to help you transform your business with cutting-edge technology solutions.
                  Reach out to discuss your project requirements and learn how our expert team can help you achieve your goals.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Card key={index} className="border-0 bg-muted/30">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-primary p-3 rounded-lg text-primary-foreground">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Support?</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to get help when you need it most
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center border-0 shadow-elegant bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-6 text-primary-foreground">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  <Button
                    variant={option.available ? "default" : "outline"}
                    className={option.available ? "bg-gradient-primary text-primary-foreground hover:shadow-glow-primary" : ""}
                    disabled={!option.available}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Footer below */}
      <Footer />
    </div>
  );
};

export default Contact;