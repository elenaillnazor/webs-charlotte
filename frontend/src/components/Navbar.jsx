import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu as MenuIcon, X, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, BUSINESS } from "../data/content";
import { scrollToId } from "../lib/scroll";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        setOpen(false);
        setTimeout(() => scrollToId(id), open ? 250 : 0);
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-cream/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(43,27,23,0.08),0_12px_32px_-16px_rgba(43,27,23,0.25)]"
                        : "bg-transparent"
                }`}
            >
                <div className="mx-auto max-w-7xl px-5 md:px-8 h-[72px] flex items-center justify-between gap-4">
                    <Logo />
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((l) => (
                            <button
                                key={l.id}
                                data-testid={`nav-link-${l.id}`}
                                onClick={() => go(l.id)}
                                className="text-[0.92rem] font-medium text-cocoa hover:text-ink transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-amber after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {l.label}
                            </button>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <a
                            data-testid="nav-instagram-link"
                            href={BUSINESS.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram de Charlotte's Coffee & Ice Cream"
                            className="hidden lg:inline-flex items-center justify-center w-11 h-11 rounded-full border border-line bg-paper/80 text-espresso transition-all duration-300 hover:border-amber hover:text-amber hover:scale-105"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            data-testid="nav-call-button"
                            href={BUSINESS.phoneHref}
                            className="hidden sm:inline-flex items-center gap-2.5 rounded-full bg-espresso text-cream pl-4 pr-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-amber hover:scale-[1.03] active:scale-95 shadow-[0_10px_24px_-10px_rgba(43,27,23,0.5)]"
                        >
                            <Phone size={15} strokeWidth={2.2} />
                            {BUSINESS.phoneDisplay}
                        </a>
                        <button
                            data-testid="mobile-menu-button"
                            onClick={() => setOpen(!open)}
                            aria-label="Abrir menú"
                            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-line bg-paper/80 text-ink"
                        >
                            {open ? <X size={20} /> : <MenuIcon size={20} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        data-testid="mobile-menu"
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-x-4 top-[84px] z-40 lg:hidden rounded-3xl bg-paper border border-line shadow-2xl p-6 flex flex-col gap-1"
                    >
                        {NAV_LINKS.map((l) => (
                            <button
                                key={l.id}
                                onClick={() => go(l.id)}
                                className="text-left font-display text-2xl font-semibold text-ink py-3 border-b border-line/60 last:border-0 hover:text-amber transition-colors"
                            >
                                {l.label}
                            </button>
                        ))}
                        <a
                            data-testid="mobile-menu-call-button"
                            href={BUSINESS.phoneHref}
                            className="mt-4 inline-flex items-center justify-center gap-2.5 rounded-full bg-amber text-cream py-4 font-semibold"
                        >
                            <Phone size={17} /> Llamar al {BUSINESS.phoneDisplay}
                        </a>
                        <a
                            data-testid="mobile-menu-instagram-link"
                            href={BUSINESS.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-cream py-3.5 font-semibold text-espresso"
                        >
                            <Instagram size={17} className="text-amber" />
                            {BUSINESS.instagramHandle}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
