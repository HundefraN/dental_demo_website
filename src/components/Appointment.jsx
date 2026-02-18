import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, Mail, Phone, Clock, Stethoscope, MessageSquare, CheckCircle, Send, MapPin, ShieldCheck } from 'lucide-react';
import './Appointment.css';

const serviceOptions = [
    'General Checkup',
    'Teeth Whitening',
    'Dental Implants',
    'Orthodontics / Invisalign',
    'Cosmetic Dentistry',
    'Root Canal Treatment',
    'Pediatric Dentistry',
    'Emergency Care',
];

const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
];

const Appointment = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '+251 ', date: '', time: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
        if (!form.phone.trim() || form.phone.length < 6) e.phone = 'Phone number is required';
        if (!form.date) e.date = 'Date is required';
        if (!form.time) e.time = 'Time is required';
        if (!form.service) e.service = 'Service is required';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setForm({ name: '', email: '', phone: '+251 ', date: '', time: '', service: '', message: '' });
            }, 5000);
        }
    };

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
    };

    return (
        <section className="section appointment" id="appointment">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Calendar size={14} />
                        Book Now
                    </span>
                    <h2 className="section-title">
                        Schedule Your <span className="text-gradient">Visit</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to transform your smile? Book your appointment online
                        and we'll confirm within 30 minutes.
                    </p>
                </div>

                <div className="appointment__grid" ref={ref}>
                    <motion.div
                        className="appointment__info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="appointment__card glass-card">
                            <h3 className="appointment__card-title">Why Choose Us?</h3>
                            <div className="appointment__features">
                                {[
                                    { icon: Clock, title: 'Zero Wait Policy', text: 'We respect your time with on-time starts.' },
                                    { icon: ShieldCheck, title: 'Sterile Environment', text: 'Hospital-grade sterilization protocols.' },
                                    { icon: Stethoscope, title: 'Expert Team', text: 'Highly qualified specialists under one roof.' },
                                    { icon: MapPin, title: 'Central Location', text: 'Easy access in the heart of Shashemene.' },
                                ].map((item, i) => (
                                    <div key={i} className="appointment__feature">
                                        <div className="appointment__feature-icon">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="appointment__hours glass-card">
                            <h4 className="appointment__hours-title"><Clock size={16} /> Opening Hours</h4>
                            <div className="appointment__hours-list">
                                <div className="appointment__hours-row">
                                    <span>Monday – Friday</span>
                                    <span className="appointment__time-val">8:00 AM – 7:00 PM</span>
                                </div>
                                <div className="appointment__hours-row">
                                    <span>Saturday</span>
                                    <span className="appointment__time-val">9:00 AM – 5:00 PM</span>
                                </div>
                                <div className="appointment__hours-row text-danger">
                                    <span>Sunday</span>
                                    <span className="appointment__time-val">Emergency Only</span>
                                </div>
                            </div>
                        </div>

                        <div className="appointment__contact-box">
                            <p>Need immediate assistance?</p>
                            <a href="tel:+251911338056" className="appointment__phone-link">
                                <Phone size={18} /> Call (251) 911-234-567
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="appointment__form-wrapper glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {submitted ? (
                            <motion.div
                                className="appointment__success"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                            >
                                <div className="appointment__success-icon">
                                    <CheckCircle size={64} strokeWidth={1.5} />
                                </div>
                                <h3>Request Received!</h3>
                                <p>We have received your appointment request. Our team will contact you shortly to confirm the details.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="btn btn-outline btn-sm"
                                    style={{ marginTop: '20px' }}
                                >
                                    Book Another
                                </button>
                            </motion.div>
                        ) : (
                            <form className="appointment__form" onSubmit={handleSubmit}>
                                <div className="appointment__form-header">
                                    <h3>Appointment Details</h3>
                                    <p>Please fill in the form below.</p>
                                </div>

                                <div className="appointment__row">
                                    <div className="appointment__field">
                                        <label>Full Name</label>
                                        <div className="input-wrapper">
                                            <User size={18} />
                                            <input
                                                type="text"
                                                placeholder="Abebe Bikila"
                                                value={form.name}
                                                onChange={e => handleChange('name', e.target.value)}
                                                className={errors.name ? 'error' : ''}
                                            />
                                        </div>
                                        {errors.name && <span className="error-msg">{errors.name}</span>}
                                    </div>
                                    <div className="appointment__field">
                                        <label>Phone Number</label>
                                        <div className="input-wrapper">
                                            <Phone size={18} />
                                            <input
                                                type="tel"
                                                placeholder="+251 ..."
                                                value={form.phone}
                                                onChange={e => handleChange('phone', e.target.value)}
                                                className={errors.phone ? 'error' : ''}
                                            />
                                        </div>
                                        {errors.phone && <span className="error-msg">{errors.phone}</span>}
                                    </div>
                                </div>

                                <div className="appointment__field">
                                    <label>Email Address</label>
                                    <div className="input-wrapper">
                                        <Mail size={18} />
                                        <input
                                            type="email"
                                            placeholder="email@example.com"
                                            value={form.email}
                                            onChange={e => handleChange('email', e.target.value)}
                                            className={errors.email ? 'error' : ''}
                                        />
                                    </div>
                                    {errors.email && <span className="error-msg">{errors.email}</span>}
                                </div>

                                <div className="appointment__row">
                                    <div className="appointment__field">
                                        <label>Date</label>
                                        <div className="input-wrapper">
                                            <Calendar size={18} />
                                            <input
                                                type="date"
                                                value={form.date}
                                                onChange={e => handleChange('date', e.target.value)}
                                                className={errors.date ? 'error' : ''}
                                            />
                                        </div>
                                        {errors.date && <span className="error-msg">{errors.date}</span>}
                                    </div>
                                    <div className="appointment__field">
                                        <label>Preferred Time</label>
                                        <div className="input-wrapper">
                                            <Clock size={18} />
                                            <select
                                                value={form.time}
                                                onChange={e => handleChange('time', e.target.value)}
                                                className={errors.time ? 'error' : ''}
                                            >
                                                <option value="">Select time</option>
                                                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                                            </select>
                                        </div>
                                        {errors.time && <span className="error-msg">{errors.time}</span>}
                                    </div>
                                </div>

                                <div className="appointment__field">
                                    <label>Service Required</label>
                                    <div className="input-wrapper">
                                        <Stethoscope size={18} />
                                        <select
                                            value={form.service}
                                            onChange={e => handleChange('service', e.target.value)}
                                            className={errors.service ? 'error' : ''}
                                        >
                                            <option value="">Select a service</option>
                                            {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                    {errors.service && <span className="error-msg">{errors.service}</span>}
                                </div>

                                <div className="appointment__field">
                                    <label>Additional Message</label>
                                    <div className="input-wrapper textarea-wrapper">
                                        <MessageSquare size={18} className="mt-1" />
                                        <textarea
                                            rows={3}
                                            placeholder="Any specific symptoms or questions?"
                                            value={form.message}
                                            onChange={e => handleChange('message', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg appointment__submit">
                                    <Send size={18} />
                                    Confirm Appointment
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
