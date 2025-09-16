import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, BookOpen, Clock } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Sacred Science Behind Hindu Pujas: Understanding Ancient Rituals",
    excerpt: "Explore the profound spiritual and scientific principles that make Hindu puja ceremonies so powerful and transformative for practitioners.",
    author: "Pandit Rajesh Sharma",
    date: "15 Dec 2024",
    readTime: "8 min read",
    category: "Spiritual Knowledge"
  };

  const blogPosts = [
    {
      title: "Ganesh Puja: The Science of Removing Obstacles",
      excerpt: "Discover why Lord Ganesha is worshipped first in all Hindu ceremonies and the psychological benefits of Ganesh puja rituals.",
      author: "Dr. Priya Acharya",
      date: "12 Dec 2024",
      readTime: "6 min read",
      category: "Puja Guides"
    },
    {
      title: "Auspicious Timing: Understanding Muhurat in Hindu Ceremonies",
      excerpt: "Learn about the ancient Vedic system of selecting favorable times for pujas and how planetary positions influence spiritual practices.",
      author: "Pandit Suresh Kumar",
      date: "10 Dec 2024", 
      readTime: "7 min read",
      category: "Astrology"
    },
    {
      title: "The Power of Mantras: Sacred Sounds and Their Effects",
      excerpt: "Understand the vibrational science behind Sanskrit mantras and how they create positive energy during puja ceremonies.",
      author: "Acharya Ramesh Gupta",
      date: "8 Dec 2024",
      readTime: "5 min read",
      category: "Mantras"
    },
    {
      title: "Lakshmi Puja Rituals: Attracting Prosperity and Abundance",
      excerpt: "Step-by-step guide to performing authentic Lakshmi puja at home with traditional methods and modern adaptations.",
      author: "Pandit Rajesh Sharma",
      date: "5 Dec 2024",
      readTime: "9 min read",
      category: "Puja Guides"
    },
    {
      title: "Vastu and Puja: Creating Sacred Spaces in Modern Homes",
      excerpt: "Learn how to align your home's energy with Vastu principles and create the perfect space for daily puja practices.",
      author: "Dr. Meera Joshi",
      date: "3 Dec 2024",
      readTime: "6 min read",
      category: "Vastu"
    },
    {
      title: "Festival Pujas: Celebrating the Divine Throughout the Year",
      excerpt: "A comprehensive calendar of Hindu festivals and the specific pujas associated with each celebration.",
      author: "Pandit Suresh Kumar",
      date: "1 Dec 2024",
      readTime: "10 min read",
      category: "Festivals"
    }
  ];

  const categories = [
    "All Posts",
    "Puja Guides", 
    "Spiritual Knowledge",
    "Astrology",
    "Mantras",
    "Festivals",
    "Vastu"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-divine py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-saffron bg-clip-text text-transparent">
              Sacred Wisdom Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ancient Hindu knowledge, puja guides, and spiritual insights for modern practitioners
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-gradient-saffron hover:bg-gradient-sacred" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Article</h2>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-divine">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <Button className="bg-gradient-saffron hover:bg-gradient-sacred">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-sacred rounded-lg flex items-center justify-center">
                    <BookOpen className="w-24 h-24 text-primary-foreground opacity-50" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">
              Spiritual insights and practical guidance for your puja practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-divine transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="aspect-[16/10] bg-gradient-divine rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-primary opacity-30" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span className="bg-muted px-2 py-1 rounded font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Load More Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Subscribe to Sacred Wisdom
          </h2>
          <p className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto">
            Get weekly spiritual insights, puja guides, and festival notifications delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-primary-foreground bg-background text-foreground"
            />
            <Button variant="secondary" className="bg-background text-primary hover:bg-muted">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;