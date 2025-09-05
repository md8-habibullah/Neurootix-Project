import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sandra Martínez",
      role: "CEO, IT-Farm",
      content: "The Neurootix team has completely transformed the way we handle data and processes in our company. We've achieved impressive levels of efficiency that we never would have imagined before implementing these solutions.",
      rating: 5
    },
    {
      name: "Juan Carlos Rodríguez",
      role: "eCommerce Owner",
      content: "As an eCommerce owner, Neurootix solutions have contributed to the growth of my company. Now, I can sell more effectively and keep up with the competitive market.",
      rating: 5
    },
    {
      name: "Roberto Pérez",
      role: "Operations Director",
      content: "The change in our processes has been a total improvement. The efficiency of all our teams has increased considerably. We are saving time and resources thanks to Neurootix solutions.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Loved by 200+ Clients
            </span>
            <br />
            <span className="text-foreground">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about our AI solutions and development services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card 
                className="bg-gradient-card border-border/50 hover:shadow-glow-accent/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-accent" />
                </div>
                
                <CardContent className="p-6 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="border-t border-border/30 pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Transform your business with our AI solutions and become our next success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-6 py-3 rounded-lg text-primary-foreground font-medium">
                Get Free Consultation
              </button>
              <button className="border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-6 py-3 rounded-lg font-medium">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
