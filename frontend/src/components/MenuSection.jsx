import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, CakeSlice, IceCreamCone, Tag } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { MENU_CATEGORIES } from "../data/content";

const ICONS = {
    icecream: IceCreamCone,
    coffee: Coffee,
    cake: CakeSlice,
};

const tagStyle = (tag) =>
    tag === "Top ventas"
        ? "bg-berry/10 text-berry border-berry/25"
        : tag === "Vegano"
        ? "bg-[#5a7d4f]/10 text-[#5a7d4f] border-[#5a7d4f]/25"
        : "bg-amber/10 text-amber border-amber/25";

const MenuSection = () => {
    const [active, setActive] = useState(MENU_CATEGORIES[0].id);
    const category = MENU_CATEGORIES.find((c) => c.id === active);

    return (
        <section id="carta" className="relative py-24 md:py-32 bg-creamsoft" data-testid="menu-section">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <Reveal className="max-w-2xl">
                    <Eyebrow>Nuestra carta</Eyebrow>
                    <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold text-ink leading-tight tracking-tight">
                        Sabores que se hacen <em className="italic text-amber">recordar</em>
                    </h2>
                    <p className="mt-4 text-cocoa leading-relaxed">
                        Helado batido en casa, café recién pasado y repostería
                        con pinta de domingo en casa de la abuela. Esto es solo
                        el principio: pásate y pregunta por los sabores del día.
                    </p>
                </Reveal>

                <Reveal delay={0.1} className="mt-10">
                    <div className="inline-flex flex-wrap gap-2 rounded-full border border-line bg-paper p-1.5">
                        {MENU_CATEGORIES.map((c) => {
                            const Icon = ICONS[c.icon];
                            const isActive = c.id === active;
                            return (
                                <button
                                    key={c.id}
                                    data-testid={`menu-category-${c.id}`}
                                    onClick={() => setActive(c.id)}
                                    className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                                        isActive ? "text-cream" : "text-cocoa hover:text-ink"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="menu-tab-pill"
                                            className="absolute inset-0 rounded-full bg-espresso"
                                            transition={{ type: "spring", stiffness: 320, damping: 30 }}
                                        />
                                    )}
                                    <Icon size={16} className="relative" />
                                    <span className="relative">{c.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={category.id}
                        data-testid="menu-panel"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start"
                    >
                        <div className="group relative overflow-hidden rounded-[32px] min-h-[280px] lg:min-h-[420px] shadow-[0_30px_60px_-24px_rgba(43,27,23,0.35)]">
                            <img
                                src={category.image}
                                alt={category.label}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                data-testid="menu-category-image"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
                            <div className="absolute bottom-0 p-7">
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-cream">
                                    {category.label}
                                </h3>
                                <p className="mt-2 text-sm text-cream/85 leading-relaxed max-w-sm">
                                    {category.blurb}
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {category.items.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                                    className="rounded-3xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-18px_rgba(43,27,23,0.28)]"
                                    data-testid="menu-item-card"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <h4 className="font-display text-lg font-semibold text-ink leading-snug">
                                            {item.name}
                                        </h4>
                                    </div>
                                    <p className="mt-2 text-sm text-cocoa leading-relaxed">{item.desc}</p>
                                    {item.tags.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {item.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[0.7rem] font-semibold ${tagStyle(t)}`}
                                                >
                                                    <Tag size={10} />
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default MenuSection;
