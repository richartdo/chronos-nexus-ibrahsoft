import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">Subscribe to our newsletter for the latest tech insights and updates</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-input border-primary/30 focus:border-primary"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">IbrahSoft Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Find your tech solutions with us. Innovative software, AI, cloud, and IT solutions for your business.
            </p>
            <div className="space-y-2">
              <a href="tel:+254795594142" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone className="mr-2 h-4 w-4" />
                +254795594142
              </a>
              <a href="mailto:info@ibrahsoft.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="mr-2 h-4 w-4" />
                brianarichard14@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Our Services</h4>
            <ul className="space-y-2">
              {["Web Development", "AI Solutions", "Cloud Computing", "IT Support", "Courses"].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 glow-primary"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 glow-primary"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 glow-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 glow-primary"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IbrahSoft Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
