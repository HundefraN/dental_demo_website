import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const contactInfo = [
    { icon: MapPin, title: 'Visit Us', lines: ['Abosto, Shashemene', 'Oromia Region, Ethiopia'], delay: 0 },
    { icon: Phone, title: 'Call Us', lines: ['+251 911 234 567', '+251 46 110 5555'], delay: 0.1 },
    { icon: Mail, title: 'Email Us', lines: ['post@marthadental.et', 'care@marthadental.et'], delay: 0.2 },
    { icon: Clock, title: 'Working Hours', lines: ['Mon-Fri: 8AM - 7PM', 'Sat: 9AM - 5PM'], delay: 0.3 },
];

const Contact = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    const spring = { type: "spring", stiffness: 50, damping: 20 };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <MapPin size={14} />
                        Get In Touch
                    </span>
                    <h2 className="section-title">
                        Contact <span className="text-gradient">Us</span>
                    </h2>
                    <p className="section-subtitle">
                        Have questions about our dental services? We're here to help.
                        Reach out to us or visit our clinic in Shashemene.
                    </p>
                </div>

                <div className="contact__cards" ref={ref}>
                    {contactInfo.map((info, i) => (
                        <motion.div
                            key={info.title}
                            className="contact__card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ ...spring, delay: info.delay }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="contact__card-icon">
                                <info.icon size={24} />
                            </div>
                            <h3 className="contact__card-title">{info.title}</h3>
                            <div className="contact__card-content">
                                {info.lines.map((line, j) => (
                                    <p key={j}>{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="contact__content">
                    <motion.div
                        className="contact__map-wrapper glass-card"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ ...spring, delay: 0.2 }}
                    >
                        <div className="contact__map-frame">
                            <iframe
                                title="Martha Dental Clinic Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.86798083896!2d38.5833!3d7.2000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b3c66f5c53171d%3A0x6b840456193798e3!2sShashemene%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1647891234567!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="contact__socials">
                            <span>Follow Us:</span>
                            <div className="contact__social-links">
                                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact__form-wrapper glass-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ ...spring, delay: 0.4 }}
                    >
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <div className="contact__form-header">
                                <h3>Send a Message</h3>
                                <p>We usually respond within 24 hours.</p>
                            </div>
                            <div className="contact__form-row">
                                <div className="contact__field">
                                    <input type="text" placeholder="Your Name" required className="contact__input" />
                                </div>
                                <div className="contact__field">
                                    <input type="email" placeholder="Your Email" required className="contact__input" />
                                </div>
                            </div>
                            <div className="contact__field">
                                <input type="text" placeholder="Subject" required className="contact__input" />
                            </div>
                            <div className="contact__field">
                                <textarea rows={5} placeholder="How can we help you?" required className="contact__input"></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="btn btn-primary contact__submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {sent ? (
                                    <>Message Sent <span style={{ marginLeft: '8px' }}>✨</span></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
