import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Youtube, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Vision & Mission', path: '/vision-mission' },
  { name: 'Activities', path: '/activities' },
  { name: 'Forum Members', path: '/members' },
  { name: 'Blog', path: '/blog' },
  { name: 'Newsletter', path: '/newsletter' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/be-mitwpu/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/budding_entrepreneur.mitwpu', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@budding_entrepreneur.mitwpu', label: 'YouTube' },
  { icon: Twitter, href: 'https://x.com/BuddingForumMIT', label: 'Twitter' },
];

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    setEmail('');
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Budding Entrepreneurs Forum" className="h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Fostering entrepreneurial spirit among students at MIT-WPU. Building tomorrow's business leaders and innovators through community, mentorship, and hands-on experience.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm hover-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  MIT-WPU, Kothrud, Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:buddingentrepreneursforum@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  buddingentrepreneursforum@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+918379943345"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 83799 43345
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our Venturer's Voyage newsletter for the latest updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Budding Entrepreneurs Forum, MIT-WPU. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
