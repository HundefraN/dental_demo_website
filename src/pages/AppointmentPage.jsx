import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Appointment from '../components/Appointment';
import './PageStyles.css';

const AppointmentPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="page">
            <div className="page__hero">
                <div className="container">
                    <motion.h1 className="page__title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        Book an <span className="text-gradient">Appointment</span>
                    </motion.h1>
                    <motion.p className="page__subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                        Schedule your visit today. We look forward to welcoming you at Martha Dental Clinic.
                    </motion.p>
                </div>
            </div>
            <Appointment />
        </div>
    );
};

export default AppointmentPage;
