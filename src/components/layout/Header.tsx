import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '@/assets/logo.png';
import mitWpuLogo from '@/assets/mit-wpu-logo-new.png';
import mitWpuLogoShort from '@/assets/mit-wpu-logo-short-new.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Branding', path: '/branding' },
  { name: 'Events', path: '/activities' },
  { name: 'Blog', path: '/blog' },
  { 
    name: 'About Us', 
    path: '/about',
    children: [
      { name: 'About the Forum', path: '/about' },
      { name: 'Forum Members', path: '/members' },
      { name: 'Our Presidents', path: '/our-presidents' },
    ]
  },
  { name: 'Contact Us', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  }, [location]);

  const isActive = (path: string, children?: { path: string }[]) => {
    if (location.pathname === path) return true;
    if (children) {
      return children.some(child => location.pathname === child.path);
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Desktop Navigation - Three Zone Layout */}
        <nav className="hidden lg:grid grid-cols-3 items-center h-20">
          {/* LEFT: BEF Logo */}
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img 
                src={logo} 
                alt="Budding Entrepreneurs Forum" 
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <div className="flex flex-col">
                <span className="font-display font-semibold text-base leading-tight text-foreground whitespace-nowrap">
                  Budding Entrepreneurs Forum
                </span>
                <span className="text-xs text-muted-foreground leading-tight">MIT-WPU</span>
              </div>
            </Link>
          </div>

          {/* CENTER: Navigation Menu */}
          <div className="flex items-center justify-center gap-1 flex-nowrap">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive(item.path, item.children)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Premium underline animation */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      isActive(item.path, item.children) 
                        ? 'w-4/5 opacity-100' 
                        : 'w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100'
                    }`}
                  />
                </Link>
                
                {/* Premium Dropdown - No arrow, smooth glassmorphism */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 py-2 w-52 bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-black/20"
                    >
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                      
                      {item.children.map((child, index) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`relative block px-5 py-3 text-sm transition-all duration-200 ${
                            location.pathname === child.path
                              ? 'text-primary bg-primary/10'
                              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                          } ${index === 0 ? 'rounded-t-xl' : ''} ${index === item.children.length - 1 ? 'rounded-b-xl' : ''}`}
                        >
                          <span className="relative z-10 flex items-center justify-between">
                            {child.name}
                            <ChevronRight className={`w-3.5 h-3.5 opacity-0 -translate-x-2 transition-all duration-200 ${
                              location.pathname === child.path ? 'opacity-60' : 'group-hover:opacity-40 group-hover:translate-x-0'
                            }`} />
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT: MIT-WPU Logo - Long version for desktop */}
          <div className="flex items-center justify-end">
            <motion.a
              href="https://mitwpu.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img 
                src={mitWpuLogo} 
                alt="MIT-WPU" 
                className="h-[60px] w-auto object-contain"
              />
            </motion.a>
          </div>
        </nav>

        {/* Mobile Navigation - Three Zone Layout */}
        <nav className="lg:hidden grid grid-cols-3 items-center h-16">
          {/* LEFT: Hamburger Menu */}
          <div className="flex items-center justify-start">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* CENTER: BEF Logo */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center gap-2">
              <motion.img 
                src={logo} 
                alt="Budding Entrepreneurs Forum" 
                className="h-10 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </Link>
          </div>

          {/* RIGHT: MIT-WPU Logo - Short version for mobile/tablet */}
          <div className="flex items-center justify-end">
            <a
              href="https://mitwpu.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={mitWpuLogoShort} 
                alt="MIT-WPU" 
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container-wide mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(
                          mobileDropdownOpen === item.name ? null : item.name
                        )}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive(item.path, item.children)
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                        }`}
                      >
                        {item.name}
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileDropdownOpen === item.name ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.path}
                                  className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                                    location.pathname === child.path
                                      ? 'text-primary bg-primary/10'
                                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
