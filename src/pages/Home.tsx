import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Heart, Users, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-temple.jpg";
import panditImage from "@/assets/pandit-puja.jpg";

const Home = () => {
  const services = [
    {
      title: "Ganesh Puja",
      description: "Remove obstacles and invite prosperity with authentic Ganesh puja ceremonies.",
      price: "₹1,500"
    },
    {
      title: "Lakshmi Puja",
      description: "Attract wealth and abundance with traditional Lakshmi worship rituals.",
      price: "₹2,000"
    },
    {
      title: "Durga Puja",
      description: "Seek divine protection and strength through powerful Durga puja ceremonies.",
      price: "₹2,500"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Beautiful puja ceremony. The pandit was very knowledgeable and explained each ritual."
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Professional service with authentic rituals. Highly recommended for all Hindu ceremonies."
    },
    {
      name: "Meera Patel",
      location: "Pune",
      rating: 5,
      text: "Excellent experience! The puja brought positive energy to our home."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-divine min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-saffron bg-clip-text text-transparent">
              Sacred Hindu Pujas
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
              Experience authentic Hindu ceremonies performed by experienced pandits. 
              Bring divine blessings and positive energy to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-saffron hover:bg-gradient-sacred shadow-divine">
                <Link to="/services" className="flex items-center">
                  Book Your Puja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Sacred Pujas?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the divine with our authentic ceremonies and experienced pandits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "Authentic Rituals",
                description: "Traditional ceremonies following ancient Vedic practices"
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Experienced Pandits",
                description: "Qualified priests with years of spiritual knowledge"
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Flexible Timing",
                description: "Schedule pujas at auspicious times that suit you"
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Sacred Materials",
                description: "Premium quality puja materials and fresh flowers"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center shadow-sacred hover:shadow-divine transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Popular Puja Services</h2>
            <p className="text-xl text-muted-foreground">
              Choose from our wide range of traditional Hindu ceremonies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-divine transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services" className="flex items-center">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Bringing Sacred Traditions to Your Home
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of experience, our team of qualified pandits brings authentic Hindu 
                ceremonies directly to your doorstep. We follow traditional Vedic practices while 
                accommodating modern lifestyles.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Certified pandits with deep scriptural knowledge",
                  "All puja materials and sacred items included",
                  "Flexible scheduling for your convenience",
                  "Multi-language support (Hindi, English, Sanskrit)"
                ].map((point, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button className="bg-gradient-saffron hover:bg-gradient-sacred">
                <Link to="/about">Learn About Our Tradition</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={panditImage} 
                alt="Pandit performing puja ceremony" 
                className="rounded-lg shadow-divine w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Devotees Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by thousands of families across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-sacred">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
            Ready to Experience Divine Blessings?
          </h2>
          <p className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto">
            Book your puja ceremony today and invite positive energy, prosperity, and divine blessings into your home.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-muted">
            <Link to="/contact" className="flex items-center">
              Book Your Puja Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;