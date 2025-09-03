import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Bot, Database, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";
// import heroImage from "@/assets/hero-image.jpg";
import heroImage from "@/assets/hero-tech-lab.jpg";
import { Link } from "react-router-dom";


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Artificial Intelligence Solutions",
      subtitle: "AI Development & Implementation",
      description: "We specialize in providing innovative and personalized AI solutions to businesses of all sizes and industries. Transform your business with cutting-edge artificial intelligence.",
      icon: <Brain className="h-12 w-12" />
    },
    {
      title: "Data Science & Analytics",
      subtitle: "Big Data Processing & Insights",
      description: "Unlock the power of your data with advanced analytics, machine learning models, and predictive insights that drive strategic business decisions.",
      icon: <Database className="h-12 w-12" />
    },
    {
      title: "Machine Learning",
      subtitle: "Custom ML Models & Automation",
      description: "Implementing Machine Learning requires exploration, modeling, and optimization. We deliver predictive and automated solutions that enhance innovation and efficiency.",
      icon: <Bot className="h-12 w-12" />
    },
    {
      title: "Business Process Automation",
      subtitle: "Intelligent Workflow Solutions",
      description: "Streamline operations and reduce costs with AI-powered automation. The synergy between workflows and technology drives organizational efficiency.",
      icon: <Zap className="h-12 w-12" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Futuristic technology laboratory"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Brain className="h-8 w-8 text-accent opacity-60" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
        <Database className="h-6 w-6 text-primary opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <Bot className="h-10 w-10 text-accent opacity-60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            {/* <Sparkles className="h-4 w-4 text-accent" /> */}
            {/* <span className="text-sm font-medium text-accent">AI Custom Software Development Company</span> */}
          </div>

          {/* Sliding Content */}
          <div className="min-h-[400px] flex flex-col justify-center">
            <div className="mb-6 flex justify-center">
              <div className="text-primary animate-pulse">
                {slides[currentSlide].icon}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-accent mb-4 font-semibold">
              {slides[currentSlide].subtitle}
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-primary-foreground group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">

              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-glow-accent transition-all duration-300"
              >
                Quote Now
              </Button></Link>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Clients Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">200+</div>
              <div className="text-sm text-muted-foreground">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">05+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;