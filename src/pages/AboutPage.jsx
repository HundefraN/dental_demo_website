import { useEffect } from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import './PageStyles.css';

const AboutPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="page">
            <div className="page__hero">
                <div className="container">
                    <motion.h1 className="page__title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        About <span className="text-gradient">Martha Dental</span>
                    </motion.h1>
                    <motion.p className="page__subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                        Learn about our story, mission, and the team dedicated to your smile.
                    </motion.p>
                </div>
            </div>
            <About />
            <Doctors />
            <Testimonials />
        </div>
    );
};

export default AboutPage;
