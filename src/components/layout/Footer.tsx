import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Vision & Mission', path: '/vision-mission' },
  { name: 'Activities', path: '/activities' },
  { name: 'Forum Members', path: '/members' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/be-mitwpu/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/budding_entrepreneur.mitwpu', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@budding_entrepreneur.mitwpu', label: 'YouTube' },
  { icon: Twitter, href: 'https://x.com/BuddingForumMIT', label: 'Twitter' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div>
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
          <div className="md:text-center">
            <h4 className="font-display font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 md:inline-block md:text-left">
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
          <div className="md:text-right">
            <h4 className="font-display font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm md:justify-end">
                <span className="text-muted-foreground text-right">
                  MIT-WPU, Kothrud, Pune, Maharashtra, India
                </span>
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              </li>
              <li className="flex gap-3 text-sm md:justify-end">
                <a
                  href="mailto:buddingentrepreneursforum@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  buddingentrepreneursforum@gmail.com
                </a>
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              </li>
              <li className="flex gap-3 text-sm md:justify-end">
                <a
                  href="tel:+918379943345"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 83799 43345
                </a>
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Budding Entrepreneurs Forum, MIT-WPU. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
