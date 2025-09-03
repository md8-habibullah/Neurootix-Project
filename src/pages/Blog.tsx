import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI in Business: Trends and Predictions for 2025",
    excerpt: "Explore the latest AI trends that will shape businesses in 2025, from generative AI to autonomous systems and ethical AI implementation.",
    author: "Pushpita Apu",
    date: "January 15, 2025",
    category: "AI/ML",
    readTime: "8 min read",
    image: "/api/placeholder/800/400"
  };

  const blogPosts = [
    {
      title: "Implementing Data-Driven Decision Making in Your Organization",
      excerpt: "Learn how to build a data-driven culture and implement analytics frameworks that drive real business results.",
      author: "Mukim",
      date: "January 12, 2025",
      category: "Data Science",
      readTime: "6 min read"
    },
    {
      title: "IoT Security Best Practices for Industrial Applications",
      excerpt: "Essential security measures to protect your IoT infrastructure from cyber threats and ensure operational continuity.",
      author: "Habibullah & Yousuf",
      date: "January 10, 2025",
      category: "Cybersecurity",
      readTime: "7 min read"
    },
    {
      title: "Mobile App Development Trends: Flutter vs React Native in 2025",
      excerpt: "A comprehensive comparison of leading cross-platform frameworks to help you choose the right technology stack.",
      author: "Rocky",
      date: "January 8, 2025",
      category: "Mobile Development",
      readTime: "5 min read"
    },
    {
      title: "Digital Marketing Automation: Tools and Strategies That Work",
      excerpt: "Discover how to streamline your marketing processes and improve ROI with the latest automation tools and techniques.",
      author: "Foyaz & Antu",
      date: "January 5, 2025",
      category: "Digital Marketing",
      readTime: "6 min read"
    },
    {
      title: "Building Scalable Web Applications: Architecture Patterns",
      excerpt: "Best practices for designing and building web applications that can handle growth and scale efficiently.",
      author: "Lami & Mehedi",
      date: "January 3, 2025",
      category: "Web Development",
      readTime: "9 min read"
    },
    {
      title: "Machine Learning Model Deployment: From Development to Production",
      excerpt: "A step-by-step guide to deploying ML models in production environments with monitoring and maintenance strategies.",
      author: "Pushpita Apu",
      date: "December 30, 2024",
      category: "AI/ML",
      readTime: "10 min read"
    }
  ];

  const categories = [
    "All Posts",
    "AI/ML",
    "Data Science",
    "Cybersecurity",
    "Mobile Development",
    "Web Development",
    "Digital Marketing",
    "IoT/Robotics"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Tech Insights & Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Latest trends, insights, and best practices from our technology experts
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.slice(1, 6).map((category) => (
                <Badge key={category} variant="secondary" className="text-sm px-4 py-2">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">Featured Article</Badge>
            </div>
            <Card className="border-0 shadow-glow-primary bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-primary/10 p-8 md:p-12 flex items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4">{featuredPost.category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {featuredPost.date}
                      </div>
                      <div>{featuredPost.readTime}</div>
                    </div>
                    <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-primary/5 flex items-center justify-center p-8">
                  <div className="w-full h-64 bg-gradient-primary/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-primary/60" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest technology trends and insights
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Posts" ? "default" : "outline"}
                  size="sm"
                  className={category === "All Posts" ? "bg-gradient-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest tech insights and industry updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;