import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, RefreshCw, MoveHorizontal, Check } from 'lucide-react';
import './BeforeAfter.css';

const cases = [
    {
        title: 'Teeth Whitening',
        desc: '45-minute Zoom whitening treatment.',
        beforeColor: '#fef3c7', // Yellowish
        afterColor: '#ffffff', // White
        icon: '🦷'
    },
    {
        title: 'Ceramic Veneers',
        desc: 'Complete smile makeover with 8 upper veneers.',
        beforeColor: '#e5e5e5', // Dull
        afterColor: '#fafafa', // Bright and shaped
        icon: '✨'
    },
    {
        title: 'Invisalign Treatment',
        desc: '12 months clear aligner therapy.',
        beforeColor: '#d4d4d4', // Crooked visual (abstract)
        afterColor: '#ffffff', // Aligned
        icon: '😁'
    },
    {
        title: 'Dental Implants',
        desc: 'Single tooth replacement with zirconia crown.',
        beforeColor: '#a3a3a3', // Missing/Gap
        afterColor: '#ffffff', // Restored
        icon: '🛠️'
    }
];

const ComparisonCard = ({ item }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    const handleTouchMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    return (
        <div
            className="ba-card glass-card"
            onMouseMove={handleMove}
            onTouchMove={handleTouchMove}
            ref={containerRef}
            style={{ '--pos': `${sliderPosition}%` }}
        >
            <div className="ba-card__viewer">
                {/* After Image (Background) */}
                <div className="ba-card__image ba-card__image--after" style={{ background: item.afterColor }}>
                    <div className="ba-card__content">
                        <span className="ba-card__emoji">{item.icon}</span>
                        <span className="ba-card__label">AFTER</span>
                    </div>
                    {/* Decorative Shine */}
                    <div className="ba-card__shine"></div>
                </div>

                {/* Before Image (Foreground, clipped) */}
                <div className="ba-card__image ba-card__image--before" style={{ background: item.beforeColor, width: `${sliderPosition}%` }}>
                    <div className="ba-card__content">
                        <span className="ba-card__emoji" style={{ filter: 'grayscale(100%) opacity(0.5)' }}>{item.icon}</span>
                        <span className="ba-card__label">BEFORE</span>
                    </div>
                </div>

                {/* Slider Handle */}
                <div className="ba-card__handle" style={{ left: `${sliderPosition}%` }}>
                    <div className="ba-card__line"></div>
                    <div className="ba-card__circle">
                        <MoveHorizontal size={16} />
                    </div>
                </div>
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
                            transition={{ duration: 0.5, delay: i * 0.1 }}
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
