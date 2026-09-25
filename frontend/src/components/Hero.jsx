import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { Phone, MapPin, ArrowDown, Sparkles } from "lucide-react";
import { BUSINESS, IMAGES } from "../data/content";
import { scrollToId } from "../lib/scroll";

const easeOut = [0.22, 1, 0.36, 1];

const HeadlineLine = ({ children, index }) => (
    <span className="block overflow-hidden pb-1">
        <motion.span
            className="block"
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.35 + index * 0.14, ease: easeOut }}
        >
            {children}
        </motion.span>
    </span>
);

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const yImg = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const yCard = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 60]);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 60, damping: 14 });
    const rY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 60, damping: 14 });

    const onMove = (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    };

    return (
        <section
            id="inicio"
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={() => {
                mx.set(0);
                my.set(0);
            }}
            data-testid="hero-section"
            className="relative min-h-screen hero-glow overflow-hidden pt-[72px] flex items-center"
        >
            <div className="mx-auto max-w-7xl px-5 md:px-8 w-full py-14 lg:py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-8 items-center">
                <motion.div style={{ y: yText }} className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
                        className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-paper/70 backdrop-blur px-4 py-2 text-xs font-semibold tracking-wide text-espresso"
                    >
                        <MapPin size={13} className="text-amber" />
                        Valdemoro · Centro Comercial El Restón
                    </motion.div>

                    <h1 className="mt-7 font-display font-bold text-ink leading-[0.98] tracking-tight text-[clamp(2.7rem,8.5vw,5.4rem)]">
                        <HeadlineLine index={0}>
                            Helado <em className="italic text-amber">artesanal</em>,
                        </HeadlineLine>
                        <HeadlineLine index={1}>
                            café con <em className="italic text-amber">encanto</em>
                        </HeadlineLine>
                        <HeadlineLine index={2}>
                            y mucha <span className="font-script font-normal text-berry">familia</span>.
                        </HeadlineLine>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.95, ease: easeOut }}
                        className="mt-6 max-w-lg text-base md:text-lg text-cocoa leading-relaxed"
                    >
                        En Charlotte's hacemos las cosas como en casa: despacio,
                        con buenos ingredientes y mucho cariño. Pasa a tomar
                        algo, estás en la tuya.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: easeOut }}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <a
                            data-testid="hero-call-button"
                            href={BUSINESS.phoneHref}
                            className="group inline-flex items-center gap-3 rounded-full bg-espresso text-cream px-7 py-4 text-base font-semibold transition-all duration-300 hover:bg-amber hover:scale-[1.03] active:scale-95 shadow-[0_18px_36px_-14px_rgba(43,27,23,0.55)]"
                        >
                            <span className="relative flex items-center justify-center">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-cream/25 soft-ping" />
                                <Phone size={18} className="relative" />
                            </span>
                            Llamar al {BUSINESS.phoneDisplay}
                        </a>
                        <button
                            data-testid="hero-menu-link"
                            onClick={() => scrollToId("carta")}
                            className="group inline-flex items-center gap-2.5 rounded-full border border-espresso/20 bg-paper/70 backdrop-blur px-7 py-4 text-base font-semibold text-espresso transition-all duration-300 hover:border-amber hover:text-amber active:scale-95"
                        >
                            Ver nuestra carta
                            <ArrowDown
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-y-1"
                            />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 1.3 }}
                        className="mt-10 flex items-center gap-3 text-sm text-cocoa"
                        data-testid="rating-badge"
                    >
                        <span className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-gold" aria-hidden="true">
                                    <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                                </svg>
                            ))}
                        </span>
                        <strong className="font-semibold text-ink">{BUSINESS.rating}</strong>
                        <span>· {BUSINESS.reviewsCount} reseñas, uno de los locales mejor valorados de Valdemoro</span>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, delay: 0.5, ease: easeOut }}
                    style={{ perspective: 1200 }}
                    className="relative mx-auto w-full max-w-[520px] h-[480px] sm:h-[560px]"
                >
                    <motion.div
                        style={{ rotateX: rX, rotateY: rY, y: yImg, transformStyle: "preserve-3d" }}
                        className="relative w-full h-full"
                        data-testid="hero-image-stack"
                    >
                        <div className="absolute inset-x-6 top-0 bottom-14 overflow-hidden rounded-t-[999px] rounded-b-[36px] shadow-[0_40px_80px_-30px_rgba(43,27,23,0.45)] border-[6px] border-paper">
                            <img
                                src={IMAGES.heroGelato}
                                alt="Helado artesanal de Charlotte's Coffee & Ice Cream"
                                className="w-full h-full object-cover"
                                data-testid="hero-main-image"
                            />
                        </div>

                        <motion.div
                            style={{ y: yCard, transform: "translateZ(50px)" }}
                            className="absolute -left-4 sm:-left-10 bottom-2 w-40 sm:w-48 rotate-[-6deg] overflow-hidden rounded-2xl border-[5px] border-paper shadow-[0_24px_48px_-16px_rgba(43,27,23,0.4)]"
                        >
                            <img
                                src={IMAGES.heroCone}
                                alt="Cono de helado de fresa"
                                className="w-full h-36 sm:h-44 object-cover"
                                data-testid="hero-secondary-image"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 14, rotate: 4 }}
                            animate={{ opacity: 1, y: 0, rotate: 3 }}
                            transition={{ duration: 0.8, delay: 1.25, ease: easeOut }}
                            style={{ transform: "translateZ(70px)" }}
                            className="absolute -right-2 sm:-right-6 top-24 rounded-2xl bg-paper/95 backdrop-blur border border-line px-5 py-4 shadow-[0_20px_44px_-16px_rgba(43,27,23,0.35)]"
                            data-testid="hero-rating-card"
                        >
                            <p className="font-display text-3xl font-bold text-ink leading-none">
                                {BUSINESS.rating}
                                <span className="text-amber text-lg">★</span>
                            </p>
                            <p className="text-xs font-medium text-cocoa mt-1.5">
                                {BUSINESS.reviewsCount} reseñas de vecinos
                                <br />
                                ¡gracias, Valdemoro!
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4, ease: easeOut }}
                            style={{ transform: "translateZ(80px)" }}
                            className="absolute right-2 sm:right-10 top-10 inline-flex items-center gap-2 rounded-full bg-berry text-cream px-4 py-2 text-xs font-semibold shadow-lg whitespace-nowrap"
                            data-testid="open-badge"
                        >
                            <Sparkles size={13} />
                            Abierto hasta las 22:00
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
