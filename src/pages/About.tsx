import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Heart, BookOpen, Clock, Shield } from "lucide-react";
import panditImage from "@/assets/pandit-puja.jpg";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Ceremonies Performed" },
    { number: "50+", label: "Qualified Pandits" },
    { number: "25+", label: "Cities Covered" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Devotion",
      description: "Deep spiritual commitment to preserving sacred traditions and serving devotees with pure intentions."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Knowledge",
      description: "Extensive study of Vedic scriptures and mantras passed down through generations of learned gurus."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Authenticity",
      description: "Strict adherence to traditional rituals and ceremonies as prescribed in ancient Hindu texts."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Service",
      description: "Dedicated to bringing divine blessings to every household with compassion and understanding."
    }
  ];

  const pandits = [
    {
      name: "Pandit Rajesh Sharma",
      qualification: "Acharya in Vedic Studies",
      experience: "20+ years",
      specialization: "Ganesh & Lakshmi Pujas"
    },
    {
      name: "Pandit Suresh Kumar",
      qualification: "Sanskrit Scholar",
      experience: "18+ years",
      specialization: "Durga & Saraswati Pujas"
    },
    {
      name: "Pandit Ramesh Gupta",
      qualification: "Vedic Astrologer",
      experience: "15+ years",
      specialization: "Graha Shanti & Navagraha Pujas"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-divine py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-saffron bg-clip-text text-transparent">
              Our Sacred Mission
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Preserving ancient Hindu traditions while making sacred ceremonies accessible to modern families. 
              We bridge the gap between timeless spiritual practices and contemporary lifestyles.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Sacred Journey</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Founded in 2009 by a group of dedicated pandits, Sacred Pujas began with a simple yet 
                  profound vision: to make authentic Hindu ceremonies accessible to every household, 
                  regardless of location or circumstances.
                </p>
                <p>
                  Our founders recognized that busy modern lifestyles often prevented families from 
                  participating in important religious ceremonies. Many lacked access to qualified 
                  pandits or the knowledge of proper rituals.
                </p>
                <p>
                  Starting with just three pandits in Mumbai, we have grown into a trusted network 
                  covering major cities across India. Each ceremony we perform carries the same 
                  reverence and authenticity as temple rituals.
                </p>
                <p>
                  Today, we continue our mission of bringing divine blessings to thousands of homes, 
                  ensuring that ancient traditions remain alive and accessible for future generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={panditImage} 
                alt="Traditional puja ceremony" 
                className="rounded-lg shadow-divine w-full"
              />
              <div className="absolute inset-0 bg-gradient-sacred opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every ceremony and interaction with our devotees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-sacred hover:shadow-divine transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Pandits</h2>
            <p className="text-xl text-muted-foreground">
              Learned scholars and experienced priests dedicated to serving you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pandits.map((pandit, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-divine transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-saffron rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{pandit.name}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center justify-center">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      {pandit.qualification}
                    </p>
                    <p className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {pandit.experience}
                    </p>
                    <p className="text-sm font-medium text-primary">{pandit.specialization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Experience Our Sacred Service
          </h2>
          <p className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied families who have experienced the divine through our authentic ceremonies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-muted">
              <Link to="/services">View Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;