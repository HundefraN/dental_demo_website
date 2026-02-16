import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
    Smile, Sparkles, AlignVerticalSpaceAround, Wrench,
    Sun, Heart, Baby, Siren, ArrowRight
} from 'lucide-react';
import './Services.css';

const services = [
    { icon: Smile, title: 'General Dentistry', desc: 'Comprehensive checkups, cleanings, and preventive care.', color: 'var(--primary)' },
    { icon: Sparkles, title: 'Cosmetic Dentistry', desc: 'Veneers, bonding, and smile makeovers.', color: 'var(--accent-rose)' },
    { icon: AlignVerticalSpaceAround, title: 'Orthodontics', desc: 'Traditional braces and Invisalign clear aligners.', color: 'var(--accent-blue)' },
    { icon: Wrench, title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacements.', color: 'var(--eth-coffee)' },
    { icon: Sun, title: 'Teeth Whitening', desc: 'Professional whitening for a brighter smile.', color: 'var(--eth-gold)' },
    { icon: Heart, title: 'Root Canal', desc: 'Gentle, pain-free endodontic treatment.', color: 'var(--primary-dark)' },
    { icon: Baby, title: 'Pediatric Dentistry', desc: 'Fun, gentle care for children.', color: 'var(--primary-light)' },
    { icon: Siren, title: 'Emergency Care', desc: '24/7 urgent dental services.', color: 'var(--accent-rose)' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
    })
};

const Services = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section services" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Sparkles size={14} />
                        Our Services
                    </span>
                    <h2 className="section-title">
                        Comprehensive <span className="text-gradient">Dental Care</span>
                    </h2>
                    <p className="section-subtitle">
                        From routine checkups to advanced procedures, we offer a full spectrum
                        of dental services under one roof with the latest technology.
                    </p>
                </div>

                <div className="services__grid" ref={ref}>
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="services__card glass-card"
                            custom={i}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        >
                            <div className="services__card-bg-glow" style={{ background: service.color }}></div>
                            <div className="services__icon" style={{ color: service.color }}>
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-desc">{service.desc}</p>
                            <Link to="/services" className="services__card-link text-gradient-gold">
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
