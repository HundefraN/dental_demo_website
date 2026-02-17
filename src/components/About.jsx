import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Award, MapPin, CheckCircle } from 'lucide-react';
import './About.css';
import logo from '../assets/logo.svg';

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

function Counter({ end, suffix, inView }) {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!inView || hasAnimated.current) return;
        hasAnimated.current = true;
        let start = 0;
        const step = end > 100 ? Math.ceil(end / 60) : 1;
        const interval = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(interval); }
            else setCount(start);
        }, 25);
        return () => clearInterval(interval);
    }, [inView, end]);

    const formatted = end >= 1000 ? `${(count / 1000).toFixed(count >= end ? 0 : 1)}K` : count;
    return <>{formatted}{suffix}</>;
}

const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.02 });

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about__grid" ref={ref}>
                    <motion.div
                        className="about__image-side"
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="about__image-wrapper">
                            <div className="about__image-bg" />
                            <div className="about__image-content glass-panel">
                                <img src={logo} alt="Martha Dental Clinic" className="about__logo-img" />
                            </div>
                            <motion.div
                                className="about__experience-badge glass-card"
                                initial={{ scale: 0 }}
                                animate={inView ? { scale: 1 } : {}}
                                transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <span className="about__experience-years text-gradient-gold">15+</span>
                                <span className="about__experience-text">Years of<br />Excellence</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about__content"
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <span className="section-badge">
                            <Heart size={14} />
                            About Us
                        </span>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>
                            Proudly Serving <span className="text-gradient-gold">Shashemene</span> Since 2009
                        </h2>
                        <p className="about__text">
                            Located in the heart of <strong>Kebele 04</strong>, Martha Dental Clinic has been a pillar of oral health
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
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.1 + i * 0.04 }}
                                        whileHover={{ x: 5, backgroundColor: "var(--primary-50)" }}
                                    >
                                        <CheckCircle size={18} className="about__why-icon" />
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="about__stats" ref={ref}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="about__stat glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.04 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="about__stat-icon">
                                <stat.icon size={24} />
                            </div>
                            <div className="about__stat-number text-gradient">
                                <Counter end={stat.value} suffix={stat.suffix} inView={inView} />
                            </div>
                            <div className="about__stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
