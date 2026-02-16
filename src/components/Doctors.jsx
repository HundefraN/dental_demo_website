import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Stethoscope, Star, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Doctors.css';

import doc1 from '../assets/doctors/doctor-1.png';
import doc2 from '../assets/doctors/doctor-2.png';
import doc3 from '../assets/doctors/doctor-3.png';
import doc4 from '../assets/doctors/doctor-4.png';
import doc5 from '../assets/doctors/doctor-5.png';

const doctors = [
    { name: 'Dr. Kebede Belete', role: 'Founder & Lead Dentist', specialty: 'Cosmetic Dentistry', experience: '15 years', rating: 4.9, color: 'var(--primary)', image: doc1 },
    { name: 'Dr. Amsal Moges', role: 'Senior Orthodontist', specialty: 'Orthodontics & Aligners', experience: '12 years', rating: 4.8, color: 'var(--accent-blue)', image: doc2 },
    { name: 'Dr. Sara Alemu', role: 'Implant Specialist', specialty: 'Dental Implants & Surgery', experience: '10 years', rating: 4.9, color: 'var(--accent-rose)', image: doc3 },
    { name: 'Dr. Hiwot Dereje', role: 'Pediatric Dentist', specialty: 'Children\'s Dentistry', experience: '8 years', rating: 4.7, color: 'var(--eth-gold)', image: doc4 },
    { name: 'Dr. Fikir Yohannis', role: 'Endodontist', specialty: 'Root Canal & Treatment', experience: '11 years', rating: 4.8, color: 'var(--primary-dark)', image: doc5 },
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
                                        <img
                                            src={doc.image}
                                            alt={doc.name}
                                            className="doctors__img"
                                        />
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
