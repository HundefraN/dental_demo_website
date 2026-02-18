import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

const Counter = ({ end, suffix = '', inView = true, duration = 2 }) => {
    const nodeRef = useRef();

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        const controls = animate(0, end, {
            duration: duration,
            ease: "easeOut",
            onUpdate: (value) => {
                if (node) {
                    let displayValue;
                    if (end >= 1000) {
                        // For thousands (e.g. 10000 -> 10K)
                        if (value >= end - 50) { // Near end, snap to clean format
                            displayValue = (end / 1000).toFixed(0) + 'k';
                        } else {
                            displayValue = (value / 1000).toFixed(1) + 'k';
                        }
                    } else {
                        displayValue = Math.round(value);
                    }
                    node.textContent = displayValue;
                }
            }
        });

        return () => controls.stop();
    }, [inView, end, duration]);

    return <><span ref={nodeRef}>0</span>{suffix}</>;
};

export default Counter;
