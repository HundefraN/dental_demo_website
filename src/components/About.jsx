import { useEffect, useState, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Award, MapPin, CheckCircle } from 'lucide-react';
import './About.css';
import logo from '../assets/logo.png';
import Counter from './Counter';

const stats = [
    { icon: Heart, value: 15, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 10000, suffix: '+', label: 'Happy Patients' },
    { icon: Award, value: 30, suffix: '+', label: 'Awards Won' },
    { icon: MapPin, value: 3, suffix: '', label: 'Clinic Locations' },
];

const whyUs = [
    'State-of-the-art diagnostic equipment',
    'Pain-free, anxiety-free treatment',
    'Affordable flexible payment plans',
    'Same-day emergency appointments',
    'Board-certified, experienced doctors',
    'Warm, family-friendly environment',
];

const About = () => {
    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about__grid" ref={headerRef}>
                    <motion.div
                        className="about__image-side"
                        initial={{ opacity: 0, x: -50 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="about__image-wrapper">
                            <div className="about__image-bg" />
                            <div className="about__image-content glass-panel">
                                <img src={logo} alt="Martha Dental Clinic" className="about__logo-img" />
                            </div>
                            <motion.div
                                className="about__experience-badge glass-card"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={headerInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                            >
                                <span className="about__experience-years text-gradient-gold">15+</span>
                                <span className="about__experience-text">Years of<br />Excellence</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about__content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <div className="section-header">
                            <span className="section-badge">
                                <Heart size={14} />
                                About Us
                            </span>
                            <h2 className="section-title">
                                Proudly Serving <span className="text-gradient-gold">Shashemene</span> Since 2009
                            </h2>
                        </div>
                        <p className="about__text">
                            Located in the heart of <strong>Abosto</strong>, Martha Dental Clinic has been a pillar of oral health
                            in our community for over 15 years. We combine Ethiopian hospitality with world-class dental technology
                            to ensure every patient leaves with a confident smile.
                        </p>
                        <p className="about__text">
                            Under the leadership of Dr. Martha and her team of specialized professionals, we have grown from a small
                            practice to Shashemene's premier dental center, trusted by thousands of families across the region.
                        </p>

                        <div className="about__why">
                            <h3 className="about__why-title">Why Choose Us?</h3>
                            <div className="about__why-grid">
                                {whyUs.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="about__why-item glass-card"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.05 }}
                                        whileHover={{ x: 5, backgroundColor: "rgba(var(--primary-rgb), 0.1)" }}
                                    >
                                        <CheckCircle size={18} className="about__why-icon" />
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="about__stats" ref={statsRef}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="about__stat glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={statsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                                borderColor: "rgba(var(--primary-rgb), 0.3)"
                            }}
                        >
                            <div className="about__stat-icon-wrapper">
                                <stat.icon size={28} strokeWidth={1.5} />
                            </div>
                            <div className="about__stat-content">
                                <div className="about__stat-number text-gradient-gold">
                                    <Counter end={stat.value} suffix={stat.suffix} inView={statsInView} />
                                </div>
                                <div className="about__stat-label">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
