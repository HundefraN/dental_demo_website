import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Smile, Sparkles, AlignVerticalSpaceAround, Wrench,
    Sun, Heart, Baby, Siren, ArrowRight, CheckCircle, Calendar
} from 'lucide-react';
import './PageStyles.css';

const allServices = [
    { icon: Smile, title: 'General Dentistry', color: '#0d9488', desc: 'Comprehensive checkups, cleanings, fillings, and preventive care to maintain your optimal oral health.', details: ['Routine examinations', 'Professional cleanings', 'Cavity fillings', 'Gum disease treatment', 'Oral cancer screenings', 'Digital X-rays'] },
    { icon: Sparkles, title: 'Cosmetic Dentistry', color: '#8b5cf6', desc: 'Veneers, bonding, and smile makeovers to give you the dazzling, confident smile you deserve.', details: ['Porcelain veneers', 'Dental bonding', 'Smile makeovers', 'Gum contouring', 'Tooth reshaping', 'Crown lengthening'] },
    { icon: AlignVerticalSpaceAround, title: 'Orthodontics', color: '#3b82f6', desc: 'Traditional braces and Invisalign clear aligners for perfectly aligned teeth at any age.', details: ['Invisalign clear aligners', 'Traditional metal braces', 'Ceramic braces', 'Lingual braces', 'Retainers', '3D treatment planning'] },
    { icon: Wrench, title: 'Dental Implants', color: '#ef4444', desc: 'Permanent, natural-looking tooth replacements using state-of-the-art titanium implant technology.', details: ['Single tooth implants', 'Multiple tooth implants', 'All-on-4 implants', 'Implant-supported dentures', 'Bone grafting', 'Sinus lifts'] },
    { icon: Sun, title: 'Teeth Whitening', color: '#f59e0b', desc: 'Professional in-office and take-home whitening treatments for a brilliantly bright smile.', details: ['In-office Zoom whitening', 'Take-home whitening kits', 'Laser whitening', 'Deep bleaching', 'Stain removal', 'Maintenance plans'] },
    { icon: Heart, title: 'Root Canal', color: '#ec4899', desc: 'Gentle, pain-free endodontic treatment to save infected teeth and relieve discomfort.', details: ['Pulp therapy', 'Retreatment', 'Apicoectomy', 'Trauma management', 'Cracked tooth repair', 'Post & core placement'] },
    { icon: Baby, title: 'Pediatric Dentistry', color: '#10b981', desc: 'Fun, gentle dental care designed especially for children in a welcoming, kid-friendly environment.', details: ['First dental visits', 'Fluoride treatments', 'Dental sealants', 'Space maintainers', 'Habit counseling', 'Sports mouthguards'] },
    { icon: Siren, title: 'Emergency Care', color: '#f97316', desc: '24/7 emergency dental services for urgent situations — cracked teeth, severe pain, and trauma.', details: ['Toothache relief', 'Broken tooth repair', 'Knocked-out teeth', 'Lost fillings/crowns', 'Abscess drainage', 'Trauma care'] },
];

const ServicesPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="page">
            <div className="page__hero">
                <div className="container">
                    <motion.h1 className="page__title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        Our <span className="text-gradient">Services</span>
                    </motion.h1>
                    <motion.p className="page__subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                        Comprehensive dental care solutions for every member of your family, powered by the latest technology.
                    </motion.p>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="services-page__list">
                        {allServices.map((service, i) => (
                            <motion.div
                                key={service.title}
                                className={`services-page__item ${i % 2 === 1 ? 'services-page__item--reverse' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="services-page__icon-side">
                                    <div className="services-page__icon-wrapper" style={{ background: `${service.color}10`, borderColor: `${service.color}30` }}>
                                        <service.icon size={48} style={{ color: service.color }} />
                                    </div>
                                </div>
                                <div className="services-page__content">
                                    <h3 className="services-page__title" style={{ color: service.color }}>{service.title}</h3>
                                    <p className="services-page__desc">{service.desc}</p>
                                    <div className="services-page__details">
                                        {service.details.map((detail, j) => (
                                            <div key={j} className="services-page__detail">
                                                <CheckCircle size={16} style={{ color: service.color }} />
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/appointment" className="btn btn-primary btn-sm">
                                        <Calendar size={14} />
                                        Book This Service
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
