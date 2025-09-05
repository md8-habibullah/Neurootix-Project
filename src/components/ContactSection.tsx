import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";


const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    message: "",
    honeypot: "", // hidden field for bot detection
  });
  const [formResult, setFormResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitRef = useRef(0); // track last submission time
  const [showParty, setShowParty] = useState(false);


  const validateForm = () => {
    // Basic spam/bot detection
    if (formData.honeypot) {
      setFormResult("Bot submission detected!");
      return false;
    }

    // Name validation
    if (!formData.name || formData.name.length < 3) {
      setFormResult("Please enter a valid name (min 3 characters).");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormResult("Please enter a valid email address.");
      return false;
    }

    // Phone validation
    const phoneRegex = /^\+?\d{7,15}$/;
    if (!phoneRegex.test(formData.number)) {
      setFormResult("Please enter a valid phone number.");
      return false;
    }

    // Message length check
    if (!formData.message || formData.message.length < 10) {
      setFormResult("Message is too short (min 10 characters).");
      return false;
    }

    // Prevent repetitive submit (5s cooldown)
    const now = Date.now();
    if (now - lastSubmitRef.current < 5000) {
      setFormResult("Please wait before sending another message.");
      return false;
    }
    lastSubmitRef.current = now;

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // prevent double click

    if (!validateForm()) return;

    setFormResult("Please wait...");
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("number", formData.number);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "c441252a-645a-4827-9d3d-02a9723d4e24"); // Replace with your key


    const launchConfetti = () => {
      const duration = 5 * 1000; // 5 seconds
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } });
      }, 250);
    };


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

        launchConfetti();
        setShowParty(true);
        setTimeout(() => setShowParty(false), 5000);


        setFormResult("Form submitted successfully!");
        setFormData({ name: "", email: "", number: "", company: "", message: "", honeypot: "" });
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
      setTimeout(() => setFormResult(""), 5000);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, title: "Headquarters", details: ["Ashiyan City", "Airport - 1230, Dhaka", "Bangladesh"], color: "text-primary" },
    { icon: <Mail className="h-5 w-5" />, title: "Email Us", details: ["neurootix@gmail.com", "Coming Soon"], color: "text-accent" },
    { icon: <Phone className="h-5 w-5" />, title: "Call Us", details: ["Coming Soon", "Coming Soon too", "24/7 Support Available"], color: "text-primary" },
    { icon: <Clock className="h-5 w-5" />, title: "Business Hours", details: ["Sun - Thu: 9:00 AM - 6:00 PM", "Weekend Support Available", "Emergency: 24/7"], color: "text-accent" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/50 to-background">
      {showParty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-4xl font-bold text-white">
          🎉 Thank you for submitting! 🎉
        </div>
      )}

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
            <span className="bg-gradient-accent bg-clip-text text-transparent">Innovators</span>
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
                <Send className="h-5 w-5 text-primary" /> Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="bg-muted/50 border-border focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="number" className="text-sm font-medium text-foreground">Phone Number *</label>
                    <Input id="number" name="number" type="number" value={formData.number} onChange={handleChange} placeholder="Phone Number" required className="bg-muted/50 border-border focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="bg-muted/50 border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">Company/Organization</label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="bg-muted/50 border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Your Message *</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your project or inquiry..." rows={6} required className="bg-muted/50 border-border focus:border-primary resize-none" />
                </div>

                {/* Honeypot field for bots */}
                <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: "none" }} autoComplete="off" />

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
                {formResult && <p className="mt-4 text-center">{formResult}</p>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${info.color} bg-muted/20 p-3 rounded-lg group-hover:animate-pulse`}>{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
