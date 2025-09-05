import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "Starting from",
      description: "Perfect for small businesses and startups looking to integrate AI solutions",
      features: [
        "Basic AI Implementation",
        "Single Platform Solution",
        "Standard UI/UX Design",
        "3 Months Support",
        "Email Support",
        "Basic Analytics",
        "Documentation Included"
      ],
      popular: false,
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      name: "Professional",
      price: "$299",
      period: "Most Popular",
      description: "Comprehensive AI solutions for growing businesses with advanced requirements",
      features: [
        "Advanced AI Development",
        "Multi-Platform Integration",
        "Custom Machine Learning Models",
        "12 Months Support",
        "Priority Support (24/7)",
        "Advanced Analytics & Reporting",
        "Data Science Consultation",
        "API Development",
        "Performance Optimization"
      ],
      popular: true,
      icon: <Star className="h-6 w-6" />
    },
    {
      name: "Enterprise",
      price: "$799+",
      period: "Custom Quote",
      description: "Full-scale AI transformation with custom solutions and dedicated support",
      features: [
        "Custom AI Architecture",
        "Enterprise-Grade Security",
        "Unlimited Platforms",
        "Unlimited Revisions",
        "24/7 Dedicated Support",
        "On-site Consultation",
        "Custom Integrations",
        "Advanced Cybersecurity + AI",
        "Team Training & Workshops",
        "Ongoing AI Strategy Consulting"
      ],
      popular: false,
      icon: <Crown className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI Development Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect AI solution package for your business needs. All plans include our quality guarantee and personalized support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative bg-gradient-card border-border/50 hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? "ring-2 ring-primary/50 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full ${
                        plan.popular
                          ? "bg-gradient-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {plan.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
                  </div>
                  <CardDescription className="text-muted-foreground mt-4">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <motion.ul
                    className="space-y-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          show: { opacity: 1, x: 0 }
                        }}
                      >
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-primary hover:shadow-glow-primary"
                          : "bg-muted hover:bg-muted/80"
                      } transition-all duration-300`}
                      size="lg"
                    >
                      {plan.name === "Enterprise" ? "Get Custom Quote" : "Get Started"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Section */}
        <motion.div
          className="text-center bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Guaranteed Quality",
                desc: "We guarantee the success of your next AI project or we'll refund your money.",
                icon: <Check className="h-6 w-6 text-primary-foreground" />,
                bg: "bg-gradient-primary"
              },
              {
                title: "Tailored Support",
                desc: "Receive personalized attention to successfully drive your business projects forward.",
                icon: <Star className="h-6 w-6 text-accent-foreground" />,
                bg: "bg-gradient-accent"
              },
              {
                title: "Available 24×7",
                desc: "We provide international support for resolving any inquiries.",
                icon: <Crown className="h-6 w-6 text-primary-foreground" />,
                bg: "bg-gradient-primary"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`${item.bg} rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
