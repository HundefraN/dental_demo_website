import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, MoveHorizontal, Check } from 'lucide-react';
import './BeforeAfter.css';

import whiteningBefore from '../assets/before-after/whitening-before.jpg';
import whiteningAfter from '../assets/before-after/whitening-after.jpg';

const cases = [
    {
        title: 'Teeth Whitening',
        desc: '45-minute Zoom whitening treatment.',
        beforeColor: '#fef3c7', // Fallback
        afterColor: '#ffffff', // Fallback
        beforeImg: whiteningBefore,
        afterImg: whiteningAfter,
        icon: '🦷'
    },
    {
        title: 'Ceramic Veneers',
        desc: 'Complete smile makeover with 8 upper veneers.',
        beforeColor: '#e5e5e5',
        afterColor: '#fafafa',
        icon: '✨'
    },
    {
        title: 'Invisalign Treatment',
        desc: '12 months clear aligner therapy.',
        beforeColor: '#d4d4d4',
        afterColor: '#ffffff',
        icon: '😁'
    },
    {
        title: 'Dental Implants',
        desc: 'Single tooth replacement with zirconia crown.',
        beforeColor: '#a3a3a3',
        afterColor: '#ffffff',
        icon: '🛠️'
    }
];

const ComparisonCard = ({ item }) => {
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const position = useTransform(x, [0, 100], ["0%", "100%"]);

    // Initialize to 50%
    useEffect(() => {
        if (containerRef.current) {
            x.set(50);
        }
    }, [x]);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const value = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (value / rect.width) * 100;
        x.set(percent);
    };

    const onMouseMove = (e) => handleMove(e.clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);

    return (
        <div
            className="ba-card glass-card"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            ref={containerRef}
            style={{
                '--pos': position,
                touchAction: 'none' // Prevent scrolling while dragging on touch
            }}
        >
            <div className="ba-card__viewer">
                {/* After Image (Background) */}
                <div
                    className="ba-card__image ba-card__image--after"
                    style={{
                        background: item.afterColor,
                        backgroundImage: item.afterImg ? `url(${item.afterImg})` : 'none'
                    }}
                >
                    <div className="ba-card__content">
                        <span className="ba-card__emoji">{item.icon}</span>
                        <span className="ba-card__label">AFTER</span>
                    </div>
                    {/* Decorative Shine */}
                    <div className="ba-card__shine"></div>
                </div>

                {/* Before Image (Foreground, clipped) */}
                <motion.div
                    className="ba-card__image ba-card__image--before"
                    style={{
                        background: item.beforeColor,
                        backgroundImage: item.beforeImg ? `url(${item.beforeImg})` : 'none',
                        width: position,
                        willChange: 'width'
                    }}
                >
                    <div className="ba-card__content">
                        <span className="ba-card__emoji" style={{ filter: 'grayscale(100%) opacity(0.5)' }}>{item.icon}</span>
                        <span className="ba-card__label">BEFORE</span>
                    </div>
                </motion.div>

                {/* Slider Handle */}
                <motion.div
                    className="ba-card__handle"
                    style={{
                        left: position,
                        willChange: 'left'
                    }}
                >
                    <div className="ba-card__line"></div>
                    <div className="ba-card__circle">
                        <MoveHorizontal size={16} />
                    </div>
                </motion.div>
            </div>

            <div className="ba-card__info">
                <h3 className="ba-card__title">{item.title}</h3>
                <p className="ba-card__desc">{item.desc}</p>
                <div className="ba-card__result">
                    <Check size={14} className="text-primary" />
                    <span>Result in 2 weeks</span>
                </div>
            </div>
        </div>
    );
};

const BeforeAfter = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section before-after" id="gallery">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Camera size={14} />
                        Real Results
                    </span>
                    <h2 className="section-title">
                        Smile <span className="text-gradient">Transformations</span>
                    </h2>
                    <p className="section-subtitle">
                        Drag the slider to see the life-changing results of our specialized treatments.
                        Real patients, real smiles.
                    </p>
                </div>

                <div className="ba-grid" ref={ref}>
                    {cases.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1, // Reduced delay
                                type: "spring",
                                stiffness: 50
                            }}
                        >
                            <ComparisonCard item={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
