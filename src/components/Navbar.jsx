import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, MapPin } from 'lucide-react';
import './Navbar.css';

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
            {/* Stylized Tooth Icon with Gold Accent */}
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C9.373 2 4 7.373 4 14c0 4.418 2.865 8.166 6.839 9.489C11.439 25.633 13.5 29 16 30c2.5-1 4.561-4.367 5.161-6.511C25.135 22.166 28 18.418 28 14c0-6.627-5.373-12-12-12z" fill="var(--primary)" opacity="0.1" />
              <path d="M16 5c-4.97 0-9 4.03-9 9 0 3.866 2.441 7.162 5.868 8.432L16 27l3.132-4.568C22.559 21.162 25 17.866 25 14c0-4.97-4.03-9-9-9z" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="13" cy="13" r="2" fill="var(--eth-gold)" />
              <circle cx="19" cy="13" r="2" fill="var(--eth-gold)" />
              <path d="M12 17s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
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
