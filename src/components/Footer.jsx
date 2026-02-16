import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
import { useState } from 'react';
import './Footer.css';

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
                                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2C9.373 2 4 7.373 4 14c0 4.418 2.865 8.166 6.839 9.489C11.439 25.633 13.5 29 16 30c2.5-1 4.561-4.367 5.161-6.511C25.135 22.166 28 18.418 28 14c0-6.627-5.373-12-12-12z" fill="currentColor" opacity="0.2" />
                                    <circle cx="13" cy="13" r="2" fill="currentColor" />
                                    <circle cx="19" cy="13" r="2" fill="currentColor" />
                                    <path d="M12 17s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
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
                                <span>Kebele 04, Shashemene</span>
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
