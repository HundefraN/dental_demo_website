import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, Crown, Users, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const plans = [
    {
        name: 'Basic Care',
        price: 49,
        period: '/month',
        description: 'Essential dental care for individuals',
        icon: Star,
        color: 'var(--primary-light)',
        popular: false,
        features: [
            'Bi-annual checkups & cleanings',
            'Digital X-rays included',
            'Fluoride treatments',
            '10% off all procedures',
            'Emergency visit coverage',
            'Online appointment booking',
        ],
    },
    {
        name: 'Premium',
        price: 89,
        period: '/month',
        description: 'Comprehensive care with cosmetic perks',
        icon: Crown,
        color: 'var(--primary)',
        popular: true,
        features: [
            'Everything in Basic Care',
            'Annual teeth whitening session',
            'Free dental sealants',
            '25% off cosmetic procedures',
            'Priority same-day appointments',
            'Extended evening hours access',
            'Free retainer replacements',
        ],
    },
    {
        name: 'Family Plan',
        price: 149,
        period: '/month',
        description: 'Complete coverage for the whole family',
        icon: Users,
        color: 'var(--accent-blue)',
        popular: false,
        features: [
            'Everything in Premium',
            'Up to 4 family members',
            'Pediatric specialist access',
            '35% off orthodontics',
            'Free kids fluoride treatments',
            'Family wellness consultations',
            'Annual family photo session',
        ],
    },
];

const Pricing = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Zap size={14} />
                        Pricing Plans
                    </span>
                    <h2 className="section-title">
                        Transparent <span className="text-gradient">Pricing</span>
                    </h2>
                    <p className="section-subtitle">
                        Choose the perfect plan for your dental care needs.
                        No hidden fees, no surprises — just exceptional care.
                    </p>
                </div>

                <div className="pricing__grid" ref={ref}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            className={`pricing__card glass-card ${plan.popular ? 'pricing__card--popular' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            {plan.popular && (
                                <div className="pricing__popular-badge">Most Popular</div>
                            )}
                            <div className="pricing__header">
                                <div className="pricing__icon" style={{ background: `color-mix(in srgb, ${plan.color} 15%, transparent)`, color: plan.color }}>
                                    <plan.icon size={24} />
                                </div>
                                <h3 className="pricing__name">{plan.name}</h3>
                                <p className="pricing__desc">{plan.description}</p>
                                <div className="pricing__price">
                                    <span className="pricing__currency">$</span>
                                    <span className="pricing__amount text-gradient">{plan.price}</span>
                                    <span className="pricing__period">{plan.period}</span>
                                </div>
                            </div>
                            <div className="pricing__features">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="pricing__feature">
                                        <div className="pricing__check" style={{ background: plan.color }}>
                                            <Check size={10} color="#fff" strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to="/appointment"
                                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing__cta`}
                            >
                                Get Started <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
