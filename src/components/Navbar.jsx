import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, MapPin, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <img src={logo} alt="Martha Dental Clinic" />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Martha</span>
            <span className="navbar__logo-sub">Dental Clinic</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="navbar__links desktop-only">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar__actions">
          <div className="navbar__info hidden-mobile">
            <div className="navbar__info-item">
              <MapPin size={16} className="text-primary" />
              <span className="text-xs text-secondary">Shashemene, Abosto</span>
            </div>
            <a href="tel:+251911338056" className="navbar__info-item">
              <Phone size={16} className="text-primary" />
              <span className="text-xs font-bold">+251 911 234 567</span>
            </a>
          </div>

          <button className="navbar__theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/appointment" className="btn btn-primary btn-sm navbar__cta">
            Book Appointment
          </Link>
          <button className="navbar__hamburger" onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile-menu__header">
                <span className="mobile-menu__title">Menu</span>
                <button className="mobile-menu__close" onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="mobile-menu__content">
                <div className="mobile-menu__links">
                  {navLinks.map(link => (
                    <motion.div key={link.to} variants={itemVariants}>
                      <Link
                        to={link.to}
                        className={`mobile-menu__link ${location.pathname === link.to ? 'mobile-menu__link--active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                        <ChevronRight size={16} className="mobile-menu__arrow" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="mobile-menu__footer">
                  <Link to="/appointment" onClick={() => setIsOpen(false)} className="btn btn-primary btn-lg mobile-menu__cta">
                    <Calendar size={18} />
                    Book Appointment
                  </Link>
                  
                  <div className="mobile-menu__info">
                    <div className="mobile-menu__info-item">
                        <MapPin size={16} className="text-primary" />
                        <span>Shashemene, Abosto</span>
                    </div>
                    <a href="tel:+251911338056" className="mobile-menu__info-item">
                        <Phone size={16} className="text-primary" />
                        <span>+251 911 234 567</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
