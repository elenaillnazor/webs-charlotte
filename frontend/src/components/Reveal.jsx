import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const Reveal = ({
    children,
    delay = 0,
    y = 30,
    className = "",
    once = true,
}) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount: 0.15 }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

export const Eyebrow = ({ children, light = false }) => (
    <p
        className={`flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase ${
            light ? "text-cream/70" : "text-amber"
        }`}
    >
        <span
            className={`inline-block w-8 h-px ${light ? "bg-cream/50" : "bg-amber/60"}`}
        />
        {children}
    </p>
);

export const Stars = ({ count = 5, size = 16, className = "" }) => (
    <span
        className={`inline-flex items-center gap-0.5 ${className}`}
        aria-label={`${count} estrellas`}
    >
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                size={size}
                className={i < count ? "fill-gold text-gold" : "fill-line text-line"}
                strokeWidth={1.5}
            />
        ))}
    </span>
);
