import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

type Stat = {
    label: string;
    target: number;
    suffix?: string;
};

const stats: Stat[] = [
    { label: 'Years of Experience', target: 4, suffix: '+' },
    { label: 'Client Satisfaction', target: 97, suffix: '%' },
    { label: 'Projects Delivered', target: 20, suffix: '+' },
    { label: 'Clients Onboarded', target: 15, suffix: '+' },
];

const Counter = ({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration * 60); // assuming 60 frames per second
        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(counter);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60); // 60 FPS
        return () => clearInterval(counter);
    }, [target, duration]);

    return (
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#0EA5E9]"
        >
            {count}
            {suffix}
        </motion.span>
    );
};

const StatsCounter: React.FC = () => {
    return (
        <motion.div className="mx-auto container glass-card hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 grid grid-cols-2 md:grid-cols-4 gap-6  p-6 rounded-xl shadow-md">
            {stats.map((stat, idx) => (
                <div key={idx} className=" flex flex-col items-center">
                    <Counter target={stat.target} suffix={stat.suffix} />
                    <span className="text-sm mt-2 text-white">{stat.label}</span>
                </div>
            ))}
        </motion.div>
    );
};

export default StatsCounter;
