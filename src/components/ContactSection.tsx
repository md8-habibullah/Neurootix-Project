import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    message: ""
  });
  const [formResult, setFormResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormResult("Submitting...");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("number", formData.number);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "c441252a-645a-4827-9d3d-02a9723d4e24"); // replace with your key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Form submitted successfully!",
        });
        setFormResult("Form submitted successfully!");
        setFormData({ name: "", email: "", number: "", company: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || 'Something went wrong!',
          variant: "destructive",
        });
        setFormResult(`Error: ${data.message || 'Something went wrong!'}`);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong!",
        variant: "destructive",
      });
      setFormResult("Something went wrong!");
    } finally {
      setTimeout(() => setFormResult(""), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Headquarters",
      details: ["Ashiyan City", "Airport - 1230, Dhaka", "Bangladesh"],
      color: "text-primary"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: ["neurootix@gmail.com", "Comming Soon", "We reply within 24 hours"],
      color: "text-accent"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: ["Comming Soon", "Comming Soon too", "24/7 Support Available"],
      color: "text-primary"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      details: ["Sun - Thu: 9:00 AM - 6:00 PM PST", "Weekend Support Available", "Emergency: 24/7"],
      color: "text-accent"
    }
  ];

  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6 animate-pulse">
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
            We're excited to discuss new ideas and collaborations. Reach out to explore how we can transform your vision into cutting-edge reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow-accent/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary animate-bounce" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Full Name *" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                    <InputField label="Phone Number *" name="number" value={formData.number} onChange={handleChange} placeholder="Phone Number" type="tel" />
                  </div>
                  <InputField label="Email Address *" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" type="email" />
                  <InputField label="Company/Organization" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
                  <TextareaField label="Your Message *" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your project or inquiry..." rows={6} />

                  <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" /> Send Message
                  </Button>
                  {formResult && <p className="mt-4 text-center text-sm text-muted-foreground animate-pulse">{formResult}</p>}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className={`${info.color} bg-muted/20 p-3 rounded-lg group-hover:animate-pulse`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, dIdx) => (
                          <p key={dIdx} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper components
const InputField = ({ label, name, value, onChange, placeholder, type = "text" }: any) => (
  <div className="space-y-2">
    <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={label.includes("*")}
      className="bg-muted/50 border-border focus:border-primary transition-all duration-300"
    />
  </div>
);

const TextareaField = ({ label, name, value, onChange, placeholder, rows }: any) => (
  <div className="space-y-2">
    <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
    <Textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={label.includes("*")}
      className="bg-muted/50 border-border focus:border-primary resize-none transition-all duration-300"
    />
  </div>
);

export default ContactSection;
