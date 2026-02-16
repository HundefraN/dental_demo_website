import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles, Shield, Clock, Award, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__bg">
                <div className="hero__gradient" />
                <div className="hero__pattern" />
                {/* Animated Orbs */}
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="hero__orb hero__orb--1"
                />
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="hero__orb hero__orb--2"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="hero__orb hero__orb--3"
                />
            </div>

            <div className="container hero__container">
                <div className="hero__content">


                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        World-Class Smiles <br />
                        <span className="text-gradient">Right Here in Shashemene</span>
                    </motion.h1>

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Blending advanced modern dentistry with the warmth of Ethiopian hospitality.
                        Your journey to a perfect smile starts at Kebele 04.
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                    >
                        <Link to="/appointment" className="btn btn-primary btn-lg">
                            <Calendar size={20} />
                            Book Appointment
                        </Link>
                        <Link to="/services" className="btn btn-secondary btn-lg">
                            Our Services
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    <motion.div
                        className="hero__features"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <div className="hero__feature glass-panel">
                            <Shield size={20} className="text-primary" />
                            <span>Sterile & Safe</span>
                        </div>
                        <div className="hero__feature glass-panel">
                            <MapPin size={20} className="text-primary" />
                            <span>Central Location</span>
                        </div>
                        <div className="hero__feature glass-panel">
                            <Award size={20} className="text-primary" />
                            <span>Top Specialists</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="hero__image-wrapper">
                        <div className="hero__image-bg animate-pulse-soft" />
                        <div className="hero__graphic">
                            {/* Abstract Tooth Representation */}
                            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__svg">
                                <circle cx="100" cy="100" r="90" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" className="animate-spin-slow" />
                                <path d="M100 40 C 60 40, 40 80, 50 120 C 55 140, 70 160, 100 160 C 130 160, 145 140, 150 120 C 160 80, 140 40, 100 40 Z"
                                    fill="url(#grad2)" filter="url(#glow)" className="animate-float" />
                                <path d="M70 70 Q 100 90 130 70" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--primary)" />
                                        <stop offset="100%" stopColor="var(--eth-gold)" />
                                    </linearGradient>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--primary-light)" />
                                        <stop offset="100%" stopColor="var(--primary)" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="hero__stats">
                        <motion.div
                            className="hero__stat glass-card"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ y: -5 }}
                        >
                            <span className="hero__stat-number text-gradient-gold">15+</span>
                            <span className="hero__stat-label">Years of Service</span>
                        </motion.div>
                        <motion.div
                            className="hero__stat glass-card"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.0 }}
                            whileHover={{ y: -5 }}
                        >
                            <span className="hero__stat-number text-gradient">5k+</span>
                            <span className="hero__stat-label">Happy Patients</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
