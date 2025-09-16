import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-saffron bg-clip-text text-transparent">
              Sacred Pujas
            </Link>
            <p className="mt-4 text-muted-foreground">
              Bringing divine blessings to your home with authentic Hindu pujas performed by experienced pandits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Popular Pujas</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Ganesh Puja</li>
              <li>Lakshmi Puja</li>
              <li>Durga Puja</li>
              <li>Saraswati Puja</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span>info@sacredpujas.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <span>Daily 6 AM - 9 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; 2024 Sacred Pujas. All rights reserved. | Bringing divine blessings to your doorstep</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;