import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Doctors from '../components/Doctors';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';

const HomePage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <Hero />
            <ScrollReveal>
                <Services />
            </ScrollReveal>
            <ScrollReveal>
                <BeforeAfter />
            </ScrollReveal>
            <ScrollReveal>
                <About />
            </ScrollReveal>
            <ScrollReveal>
                <Doctors />
            </ScrollReveal>
            <ScrollReveal>
                <Testimonials />
            </ScrollReveal>
            <ScrollReveal>
                <Pricing />
            </ScrollReveal>
            <ScrollReveal>
                <FAQ />
            </ScrollReveal>
            <ScrollReveal>
                <Appointment />
            </ScrollReveal>
            <ScrollReveal>
                <Contact />
            </ScrollReveal>
        </>
    );
};

export default HomePage;
