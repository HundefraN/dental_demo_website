import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import './PageStyles.css';

const ContactPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="page">
            <div className="page__hero">
                <div className="container">
                    <motion.h1 className="page__title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        Contact <span className="text-gradient">Us</span>
                    </motion.h1>
                    <motion.p className="page__subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                        We'd love to hear from you. Reach out for appointments, questions, or just to say hello.
                    </motion.p>
                </div>
            </div>
            <Contact />
            <FAQ />
        </div>
    );
};

export default ContactPage;
