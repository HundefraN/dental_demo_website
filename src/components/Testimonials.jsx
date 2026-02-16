import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    { name: 'Tigist Alemu', treatment: 'Teeth Whitening', rating: 5, text: "I've never felt so confident about my smile! The team at Martha Dental Clinic in Kebele 04 is simply amazing. They made me feel at home.", avatar: 'TA' },
    { name: 'Dawit Kebede', treatment: 'Dental Implants', rating: 5, text: "Dr. Martha is a true professional. I was worried about getting implants, but the procedure was smooth and the results are natural. Highly recommended!", avatar: 'DK' },
    { name: 'Hanna Tadesse', treatment: 'Orthodontics', rating: 5, text: "My daughter loves coming here! The pediatric care is exceptional, and her braces progress has been wonderful. Thank you for such world-class care.", avatar: 'HT' },
    { name: 'Solomon Worku', treatment: 'Root Canal', rating: 5, text: "Pain-free and efficient. I came in with a severe toothache and left relieved. The clinic is modern, clean, and the staff treats you like family.", avatar: 'SW' },
    { name: 'Betty Mengistu', treatment: 'Cosmetic Veneers', rating: 5, text: "I can't stop smiling! The veneers look so natural. The attention to detail and Ethiopian hospitality make this the best dental clinic.", avatar: 'BM' },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(c => (c + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent(c => (c + 1) % testimonials.length);

    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <MessageSquare size={14} />
                        Testimonials
                    </span>
                    <h2 className="section-title">
                        What Our <span className="text-gradient">Patients Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Real stories from real patients who experienced the Martha Dental
                        Clinic difference.
                    </p>
                </div>

                <div className="testimonials__carousel" ref={ref}>
                    <motion.div
                        className="testimonials__quote-icon"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 0.1, scale: 1 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <Quote size={140} />
                    </motion.div>

                    <div className="testimonials__content-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                className="testimonials__card glass-card"
                                initial={{ opacity: 0, x: 50, rotate: 2 }}
                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                exit={{ opacity: 0, x: -50, rotate: -2 }}
                                transition={{ duration: 0.5, type: 'spring' }}
                            >
                                <div className="testimonials__stars">
                                    {[...Array(testimonials[current].rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="#f59e0b" stroke="#f59e0b" />
                                    ))}
                                </div>
                                <p className="testimonials__text">"{testimonials[current].text}"</p>
                                <div className="testimonials__divider"></div>
                                <div className="testimonials__author">
                                    <div className="testimonials__avatar">
                                        {testimonials[current].avatar}
                                    </div>
                                    <div className="testimonials__author-info">
                                        <p className="testimonials__name">{testimonials[current].name}</p>
                                        <p className="testimonials__treatment">{testimonials[current].treatment}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="testimonials__controls">
                            <button className="testimonials__arrow glass-card" onClick={prev} aria-label="Previous">
                                <ChevronLeft size={24} />
                            </button>
                            <div className="testimonials__dots">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                                        onClick={() => setCurrent(i)}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <button className="testimonials__arrow glass-card" onClick={next} aria-label="Next">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
