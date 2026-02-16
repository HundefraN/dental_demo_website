import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Stethoscope, Star, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Doctors.css';

const doctors = [
    { name: 'Dr. Martha Johnson', role: 'Founder & Lead Dentist', specialty: 'Cosmetic Dentistry', experience: '15 years', rating: 4.9, color: 'var(--primary)' },
    { name: 'Dr. James Williams', role: 'Senior Orthodontist', specialty: 'Orthodontics & Aligners', experience: '12 years', rating: 4.8, color: 'var(--accent-blue)' },
    { name: 'Dr. Sarah Chen', role: 'Implant Specialist', specialty: 'Dental Implants & Surgery', experience: '10 years', rating: 4.9, color: 'var(--accent-rose)' },
    { name: 'Dr. Michael Davis', role: 'Pediatric Dentist', specialty: 'Children\'s Dentistry', experience: '8 years', rating: 4.7, color: 'var(--eth-gold)' },
    { name: 'Dr. Emily Roberts', role: 'Endodontist', specialty: 'Root Canal & Treatment', experience: '11 years', rating: 4.8, color: 'var(--primary-dark)' },
    { name: 'Dr. David Park', role: 'Periodontist', specialty: 'Gum Disease & Treatment', experience: '9 years', rating: 4.9, color: 'var(--eth-coffee)' },
];

const Doctors = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section doctors" id="doctors">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Stethoscope size={14} />
                        Our Team
                    </span>
                    <h2 className="section-title">
                        Meet Our <span className="text-gradient">Expert Doctors</span>
                    </h2>
                    <p className="section-subtitle">
                        Our board-certified dental professionals bring years of experience
                        and genuine care to every patient interaction.
                    </p>
                </div>

                <div className="doctors__grid" ref={ref}>
                    {doctors.map((doc, i) => (
                        <motion.div
                            key={doc.name}
                            className="doctors__card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="doctors__image-wrapper">
                                <div className="doctors__bg-pattern" style={{ background: `radial-gradient(circle at top right, ${doc.color}20, transparent 70%)` }}></div>
                                <div className="doctors__avatar">
                                    <div className="doctors__avatar-inner" style={{ borderColor: doc.color }}>
                                        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="40" cy="30" r="16" fill={`${doc.color}30`} stroke={doc.color} strokeWidth="2" />
                                            <path d="M16 72c0-13.3 10.7-24 24-24s24 10.7 24 24" fill={`${doc.color}15`} stroke={doc.color} strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="doctors__rating glass-panel">
                                        <Star size={12} fill="#FFB546" stroke="#FFB546" />
                                        <span>{doc.rating}</span>
                                    </div>
                                </div>
                                <div className="doctors__socials">
                                    <button className="doctors__social-btn"><Linkedin size={16} /></button>
                                    <button className="doctors__social-btn"><Twitter size={16} /></button>
                                </div>
                            </div>

                            <div className="doctors__info">
                                <h3 className="doctors__name">{doc.name}</h3>
                                <p className="doctors__role" style={{ color: doc.color }}>{doc.role}</p>
                                <p className="doctors__specialty">{doc.specialty}</p>

                                <div className="doctors__divider"></div>

                                <div className="doctors__meta">
                                    <div className="doctors__exp">
                                        <span className="doctors__meta-label">Experience</span>
                                        <span className="doctors__meta-value">{doc.experience}</span>
                                    </div>
                                    <Link to="/appointment" className="btn btn-sm btn-secondary doctors__book-btn">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
