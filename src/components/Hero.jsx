import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Shield, Award, MapPin, Stethoscope } from 'lucide-react';
import './Hero.css';
import diagnosisImg from '../assets/diagnosis.jpg';
import Counter from './Counter';

const Hero = () => {
    const springTransition = { type: "spring", stiffness: 50, damping: 20 };
    const floatTransition = { duration: 6, repeat: Infinity, ease: "easeInOut" };

    return (
        <section className="hero" id="home">
            <div className="hero__bg">
                <div className="hero__gradient" />
                <div className="hero__pattern" />
                {/* Animated Orbs - Ultra Fluid */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="hero__orb hero__orb--1"
                />
                <motion.div
                    animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="hero__orb hero__orb--2"
                />
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="hero__orb hero__orb--3"
                />
            </div>

            <div className="container hero__container">
                <div className="hero__content">

                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...springTransition, delay: 0.2 }}
                    >
                        World-Class Smiles <br />
                        <span className="text-gradient">Right Here in Shashemene</span>
                    </motion.h1>

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...springTransition, delay: 0.4 }}
                    >
                        Blending advanced modern dentistry with the warmth of Ethiopian hospitality.
                        Your journey to a perfect smile starts at Abosto.
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...springTransition, delay: 0.6 }}
                    >
                        <Link to="/appointment">
                            <motion.button
                                className="btn btn-primary btn-lg btn-shine"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(15, 118, 110, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Calendar size={20} />
                                Book Appointment
                            </motion.button>
                        </Link>
                        <Link to="/services">
                            <motion.button
                                className="btn btn-secondary btn-lg"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Our Services
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="hero__features"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...springTransition, delay: 0.8 }}
                    >
                        {[
                            { icon: Shield, text: 'Sterile & Safe' },
                            { icon: MapPin, text: 'Central Location' },
                            { icon: Award, text: 'Top Specialists' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                className="hero__feature glass-panel"
                                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.8)" }}
                            >
                                <feature.icon size={20} className="text-primary" />
                                <span>{feature.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, x: 60, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ ...springTransition, delay: 0.5 }}
                >
                    <div className="hero__image-wrapper">
                        {/* Decorative animated rings */}
                        <div className="hero__ring hero__ring--outer animate-spin-slow" />
                        <div className="hero__ring hero__ring--inner" />

                        {/* Main image */}
                        <motion.div
                            className="hero__photo-frame"
                            whileHover={{ scale: 1.02, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <img
                                src={diagnosisImg}
                                alt="Dentist performing a diagnosis at Martha Dental Clinic"
                                className="hero__photo"
                                fetchPriority="high"
                                loading="eager"
                            />
                            <div className="hero__photo-overlay" />
                            <div className="hero__shimmer" />
                        </motion.div>

                        {/* Floating badge */}
                        <motion.div
                            className="hero__badge glass-card"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
                            transition={{
                                scale: { delay: 1.2, type: 'spring' },
                                y: floatTransition
                            }}
                        >
                            <Stethoscope size={18} className="text-primary" />
                            <span>Expert Care</span>
                        </motion.div>
                    </div>

                    <div className="hero__stats">
                        <motion.div
                            className="hero__stat glass-card"
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ...springTransition, delay: 1.0 }}
                            whileHover={{ x: -10, transition: { duration: 0.2 } }}
                        >
                            <span className="hero__stat-number text-gradient-gold">
                                <Counter end={15} suffix="+" />
                            </span>
                            <span className="hero__stat-label">Years of Service</span>
                        </motion.div>
                        <motion.div
                            className="hero__stat glass-card"
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ...springTransition, delay: 1.2 }}
                            whileHover={{ x: -10, transition: { duration: 0.2 } }}
                        >
                            <span className="hero__stat-number text-gradient">
                                <Counter end={5000} suffix="+" />
                            </span>
                            <span className="hero__stat-label">Happy Patients</span>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
