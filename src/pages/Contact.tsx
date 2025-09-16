import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 2 hours to confirm your puja booking.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Ganesh Puja",
    "Lakshmi Puja", 
    "Durga Puja",
    "Saraswati Puja",
    "Navagraha Puja",
    "Satyanarayan Puja",
    "Griha Pravesh Puja",
    "Kali Puja",
    "Custom Puja Package"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 98765 43211"],
      subtitle: "Call for immediate booking"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Address", 
      details: ["info@sacredpujas.com", "booking@sacredpujas.com"],
      subtitle: "Send detailed requirements"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Service Areas",
      details: ["Mumbai & Suburbs", "Pune, Delhi, Bangalore"],
      subtitle: "Home service available"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Working Hours",
      details: ["Daily: 6:00 AM - 9:00 PM", "Emergency: 24/7 available"],
      subtitle: "Flexible puja timings"
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book a puja?",
      answer: "We recommend booking at least 3-7 days in advance for regular pujas. For special occasions like festivals, please book 2-3 weeks ahead."
    },
    {
      question: "Do you provide all puja materials?",
      answer: "Yes, we provide all necessary puja materials including flowers, incense, offerings, and sacred items. You don't need to arrange anything."
    },
    {
      question: "Can you perform pujas in apartments?",
      answer: "Absolutely! Our pandits are experienced in conducting pujas in all types of spaces, from small apartments to large homes."
    },
    {
      question: "What languages do your pandits speak?",
      answer: "Our pandits are fluent in Hindi, English, and Sanskrit. We can also arrange services in regional languages upon request."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-divine py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-saffron bg-clip-text text-transparent">
              Book Your Sacred Puja
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with our experienced pandits and schedule your authentic Hindu ceremony today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-saffron hover:bg-gradient-sacred shadow-divine">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98765 43210
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Booking
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-foreground">Book Your Puja Online</h2>
            
            <Card className="shadow-divine">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Puja Service *</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select puja service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Special Requirements</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Any specific requirements, address, or questions..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-saffron hover:bg-gradient-sacred shadow-divine"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Booking Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * We'll contact you within 2 hours to confirm your booking and discuss details
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-foreground">Get In Touch</h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-sacred hover:shadow-divine transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{info.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-primary font-medium mt-2">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Booking Options */}
            <Card className="shadow-divine bg-gradient-divine">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4 text-foreground">Quick Booking Options</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Phone className="w-4 h-4 mr-3" />
                    Call for Immediate Booking
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <MessageCircle className="w-4 h-4 mr-3" />
                    WhatsApp Quick Chat
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Calendar className="w-4 h-4 mr-3" />
                    Check Pandit Availability
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-sacred">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto">
            Our customer support team is available 24/7 to help you with urgent puja bookings and spiritual guidance.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-muted">
            <Phone className="w-5 h-5 mr-2" />
            Emergency Helpline: +91 98765 43211
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;