import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({ children, width = "100%", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75, filter: 'blur(10px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
