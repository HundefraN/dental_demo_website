import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, MapPin } from 'lucide-react';
import './Navbar.css';

import logo from '../assets/logo.svg';

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

  useEffect(() => { setIsOpen(false); }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

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

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/appointment" className="btn btn-primary btn-sm navbar__cta-mobile">
            Book Appointment
          </Link>
        </div>

        <div className="navbar__actions">
          <div className="navbar__info hidden-mobile">
            <div className="navbar__info-item">
              <MapPin size={16} className="text-primary" />
              <span className="text-xs text-secondary">Shashemene, Kebele 04</span>
            </div>
            <a href="tel:+251911234567" className="navbar__info-item">
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
          <button className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
