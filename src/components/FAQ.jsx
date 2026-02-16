import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
    { q: 'How often should I visit the dentist?', a: 'We recommend visiting every 6 months for routine checkups and cleanings. However, if you have specific dental conditions like gum disease or are undergoing treatment, more frequent visits may be necessary. Our team will create a personalized schedule for you.' },
    { q: 'Does teeth whitening damage enamel?', a: 'Professional teeth whitening, when done under dental supervision, is completely safe for your enamel. We use ADA-approved whitening agents with controlled concentrations that effectively brighten your smile without causing damage. At-home kits from the store, however, may be harsh if misused.' },
    { q: 'What should I do in a dental emergency?', a: 'Call our emergency line at (123) 456-7890 immediately. For knocked-out teeth, keep the tooth moist in milk and come in within 30 minutes. For severe pain, rinse with warm salt water and apply a cold compress. We offer same-day emergency appointments 24/7.' },
    { q: 'Are dental implants painful?', a: 'The implant procedure is performed under local anesthesia, so you won\'t feel pain during the surgery. Post-procedure discomfort is typically mild and manageable with over-the-counter pain relievers. Most patients report that the procedure was far less uncomfortable than they expected.' },
    { q: 'How long does Invisalign treatment take?', a: 'Invisalign treatment typically takes 6 to 18 months, depending on the complexity of your case. During your consultation, Dr. Williams will provide a personalized treatment plan with an estimated timeline and show you a 3D preview of your expected results.' },
    { q: 'Do you accept dental insurance?', a: 'Yes! We accept most major dental insurance plans including Delta Dental, Cigna, MetLife, Aetna, and many more. We also offer flexible payment plans and CareCredit financing for patients without insurance. Our front desk team will help verify your benefits before any procedure.' },
    { q: 'At what age should my child first visit the dentist?', a: 'The American Academy of Pediatric Dentistry recommends a child\'s first dental visit by age 1 or within 6 months of the first tooth appearing. Early visits help establish good oral hygiene habits and allow us to catch potential issues early.' },
    { q: 'What is the difference between a crown and a veneer?', a: 'A crown covers the entire tooth and is used when significant structure is damaged or decayed. A veneer is a thin shell that covers only the front surface and is primarily cosmetic. During consultation, we\'ll recommend the best option based on your specific needs and goals.' },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section faq" id="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <HelpCircle size={14} />
                        FAQ
                    </span>
                    <h2 className="section-title">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Find answers to common questions about our services, treatments,
                        and policies below.
                    </p>
                </div>

                <div className="faq__list" ref={ref}>
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            className={`faq__item glass-card ${openIndex === i ? 'faq__item--open' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.06 }}
                        >
                            <button
                                className="faq__question"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span className="faq__question-text">{faq.q}</span>
                                <div className="faq__icon-wrapper">
                                    {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        className="faq__answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="faq__answer-content">
                                            <p>{faq.a}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
