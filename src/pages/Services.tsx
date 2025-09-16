import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Star, Phone, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Ganesh Puja",
      description: "Remove obstacles and invite prosperity with authentic Ganesh puja ceremonies. Perfect for new beginnings, business launches, and important life events.",
      price: "₹1,500",
      duration: "2-3 hours",
      includes: ["Pandit service", "All puja materials", "Prasadam", "Aarti ceremony"],
      popular: true
    },
    {
      title: "Lakshmi Puja",
      description: "Attract wealth, prosperity, and abundance with traditional Lakshmi worship rituals. Ideal for Diwali and business prosperity ceremonies.",
      price: "₹2,000",
      duration: "2.5-3 hours",
      includes: ["Qualified pandit", "Gold/silver items", "Fresh flowers", "Sacred mantras"],
      popular: true
    },
    {
      title: "Durga Puja",
      description: "Seek divine protection, strength, and victory over obstacles through powerful Durga puja ceremonies and ancient mantras.",
      price: "₹2,500",
      duration: "3-4 hours",
      includes: ["Experienced pandit", "Sacred kalash", "Red cloth & flowers", "Hawan ceremony"],
      popular: false
    },
    {
      title: "Saraswati Puja",
      description: "Invoke wisdom, knowledge, and artistic abilities with authentic Saraswati puja. Perfect for students and creative professionals.",
      price: "₹1,800",
      duration: "2-3 hours",
      includes: ["Learned pandit", "Books & instruments", "White flowers", "Prasadam"],
      popular: false
    },
    {
      title: "Navagraha Puja",
      description: "Balance planetary influences and remove negative effects with comprehensive Navagraha puja ceremonies and vedic remedies.",
      price: "₹3,000",
      duration: "4-5 hours",
      includes: ["Vedic astrologer", "9 kalash setup", "Specific mantras", "Gemstone guidance"],
      popular: false
    },
    {
      title: "Satyanarayan Puja",
      description: "Seek Lord Vishnu's blessings for peace, prosperity, and fulfillment of desires through this sacred monthly ceremony.",
      price: "₹1,200",
      duration: "1.5-2 hours",
      includes: ["Pandit service", "Puja samagri", "Prasadam", "Katha recitation"],
      popular: false
    },
    {
      title: "Griha Pravesh Puja",
      description: "Purify and bless your new home with authentic house warming ceremonies for positive energy and divine protection.",
      price: "₹2,200",
      duration: "3-4 hours",
      includes: ["House blessing", "Vastu remedies", "Sacred fire ritual", "Protection mantras"],
      popular: false
    },
    {
      title: "Kali Puja",
      description: "Invoke divine mother's protection and remove negative energies with powerful Kali puja ceremonies and tantric rituals.",
      price: "₹2,800",
      duration: "3-4 hours",
      includes: ["Tantric pandit", "Special offerings", "Protection rituals", "Sacred geometry"],
      popular: false
    },
    {
      title: "Custom Puja Package",
      description: "Personalized puja ceremonies tailored to your specific needs, occasions, and family traditions with full consultation.",
      price: "From ₹1,000",
      duration: "Varies",
      includes: ["Consultation", "Custom rituals", "Flexible timing", "Personal guidance"],
      popular: false
    }
  ];

  const features = [
    "Certified and experienced pandits",
    "All puja materials included",
    "Flexible scheduling available",
    "Multi-language support",
    "Photo/video documentation",
    "Post-puja guidance provided"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-divine py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-saffron bg-clip-text text-transparent">
              Sacred Puja Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Authentic Hindu ceremonies performed by qualified pandits with traditional rituals and modern convenience.
            </p>
            <Button size="lg" className="bg-gradient-saffron hover:bg-gradient-sacred shadow-divine">
              <Phone className="w-5 h-5 mr-2" />
              Book Consultation: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every puja service comes with comprehensive support and authentic materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Choose Your Sacred Ceremony</h2>
            <p className="text-xl text-muted-foreground">
              Traditional Hindu pujas performed with devotion and authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative shadow-sacred hover:shadow-divine transition-all duration-300 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-accent">{service.price}</span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Includes:</h4>
                    <ul className="space-y-1">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-saffron hover:bg-gradient-sacred">
                    <Link to="/contact" className="flex items-center justify-center w-full">
                      Book This Puja
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to book your sacred ceremony
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Service",
                description: "Select the puja ceremony that suits your needs and occasion"
              },
              {
                step: "2", 
                title: "Schedule",
                description: "Pick an auspicious date and time that works for your family"
              },
              {
                step: "3",
                title: "Confirmation",
                description: "Our team confirms details and arranges all required materials"
              },
              {
                step: "4",
                title: "Sacred Ceremony",
                description: "Qualified pandit performs authentic ritual at your location"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{process.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Book Your Puja?
          </h2>
          <p className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your sacred ceremony and receive divine blessings for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-muted">
              <Link to="/contact" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98765 43210
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Book Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;