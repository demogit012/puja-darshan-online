import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-saffron bg-clip-text text-transparent">
            Sacred Pujas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="bg-gradient-saffron hover:bg-gradient-sacred">
              <Phone className="w-4 h-4 mr-2" />
              Book Puja
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary font-medium bg-muted" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Button size="sm" className="w-full bg-gradient-saffron hover:bg-gradient-sacred">
                <Phone className="w-4 h-4 mr-2" />
                Book Puja
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;