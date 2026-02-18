import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
import { useState } from 'react';
import './Footer.css';

import logo from '../assets/logo.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <div className="footer__logo-icon">
                                <img src={logo} alt="Martha Dental Clinic" />
                            </div>
                            <div className="footer__logo-text">
                                <span className="footer__logo-name">Martha</span>
                                <span className="footer__logo-sub">Dental Clinic</span>
                            </div>
                        </Link>
                        <p className="footer__desc">
                            Providing world-class dental care with cutting-edge technology and a personal touch since 2009. Your smile is our mission.
                        </p>
                        <div className="footer__socials">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="footer__social" aria-label="Social media">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Quick Links</h4>
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/about" className="footer__link">About Us</Link>
                        <Link to="/services" className="footer__link">Services</Link>
                        <Link to="/contact" className="footer__link">Contact</Link>
                        <Link to="/appointment" className="footer__link">Book Appointment</Link>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Our Services</h4>
                        <Link to="/services" className="footer__link">General Dentistry</Link>
                        <Link to="/services" className="footer__link">Cosmetic Dentistry</Link>
                        <Link to="/services" className="footer__link">Orthodontics</Link>
                        <Link to="/services" className="footer__link">Dental Implants</Link>
                        <Link to="/services" className="footer__link">Teeth Whitening</Link>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Newsletter</h4>
                        <p className="footer__newsletter-text">
                            Subscribe for dental tips, offers, and clinic updates.
                        </p>
                        <form className="footer__newsletter" onSubmit={handleSubscribe}>
                            <div className="footer__newsletter-input">
                                <Mail size={16} />
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">
                                {subscribed ? 'Subscribed!' : 'Subscribe'}
                            </button>
                        </form>

                        <div className="footer__contact-info">
                            <div className="footer__contact-row">
                                <Phone size={14} />
                                <span>+251 911 234 567</span>
                            </div>
                            <div className="footer__contact-row">
                                <MapPin size={14} />
                                <span>Abosto, Shashemene</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © 2024 Martha Dental Clinic. All rights reserved. Made with <Heart size={14} className="footer__heart" /> for healthy smiles.
                    </p>
                    <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Back to top">
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
