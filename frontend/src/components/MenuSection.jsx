import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Coffee,
    CakeSlice,
    IceCreamCone,
    Sandwich,
    Croissant,
    CupSoda,
    Wheat,
    Sparkles,
} from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { MENU_CATEGORIES } from "../data/content";
import { LogoMark } from "./Logo";

const ICONS = {
    sandwich: Sandwich,
    croissant: Croissant,
    coffee: Coffee,
    cake: CakeSlice,
    icecream: IceCreamCone,
    cup: CupSoda,
    sparkles: Sparkles,
    wheat: Wheat,
};

const ItemRow = ({ item }) => (
    <div
        className="flex items-baseline justify-between gap-4 py-2.5 border-b border-line/70 last:border-0"
        data-testid="menu-item-row"
    >
        <div className="min-w-0">
            <p className="font-display text-[1.02rem] font-semibold text-ink leading-snug">
                {item.name}
            </p>
            {item.desc && (
                <p className="text-[0.8rem] text-cocoa mt-0.5 leading-snug">{item.desc}</p>
            )}
        </div>
        <p
            className="shrink-0 font-semibold text-amber whitespace-nowrap"
            data-testid="menu-item-price"
        >
            {item.price}
        </p>
    </div>
);

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
                        Helado batido en casa, café recién pasado, bocadillos y
                        tostadas al momento y repostería con pinta de domingo en
                        casa de la abuela. Esto es solo el principio: pásate y
                        pregunta por los sabores del día.
                    </p>
                </Reveal>

                <Reveal delay={0.1} className="mt-10">
                    <div className="inline-flex flex-wrap gap-2 rounded-[28px] border border-line bg-paper p-1.5">
                        {MENU_CATEGORIES.map((c) => {
                            const Icon = ICONS[c.icon];
                            const isActive = c.id === active;
                            return (
                                <button
                                    key={c.id}
                                    data-testid={`menu-category-${c.id}`}
                                    onClick={() => setActive(c.id)}
                                    className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.82rem] font-semibold transition-colors duration-300 ${
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
                                    <Icon size={15} className="relative" />
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
                        className="mt-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch"
                    >
                        <div className="group relative overflow-hidden rounded-[32px] min-h-[280px] lg:min-h-[420px] shadow-[0_30px_60px_-24px_rgba(43,27,23,0.35)]">
                            {category.image ? (
                                <>
                                    <img
                                        src={category.image}
                                        alt={category.label}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                        data-testid="menu-category-image"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/45 to-transparent" />
                                </>
                            ) : (
                                <div className="absolute inset-0 bg-espresso2">
                                    <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-amber/15 blur-3xl" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <LogoMark className="w-28 h-28 opacity-20 invert" />
                                    </div>
                                </div>
                            )}
                            <div className="absolute bottom-0 p-7">
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-cream">
                                    {category.label}
                                </h3>
                                <p className="mt-2 text-sm text-cream/85 leading-relaxed max-w-sm">
                                    {category.blurb}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-line bg-paper p-7 md:p-9">
                            {category.groups.map((group) => (
                                <div key={group.subtitle || "all"} className="mb-5 last:mb-0">
                                    {group.subtitle && (
                                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber mb-1">
                                            {group.subtitle}
                                        </p>
                                    )}
                                    {group.items.map((item) => (
                                        <ItemRow key={item.name} item={item} />
                                    ))}
                                </div>
                            ))}
                            {category.note && (
                                <div
                                    className="mt-5 inline-flex items-center gap-2.5 rounded-2xl border border-amber/25 bg-amber/10 px-4 py-3 text-[0.82rem] font-medium text-espresso"
                                    data-testid="menu-note"
                                >
                                    <Sparkles size={14} className="text-amber shrink-0" />
                                    {category.note}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default MenuSection;
