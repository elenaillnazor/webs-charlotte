import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { GALLERY } from "../data/content";

const spanClass = {
    lg: "col-span-2 row-span-2",
    wide: "col-span-2 row-span-1",
    sm: "col-span-1 row-span-1",
};

const Galeria = () => {
    const [selected, setSelected] = useState(null);
    const close = useCallback(() => setSelected(null), []);

    useEffect(() => {
        if (selected === null) return;
        const onKey = (e) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected, close]);

    return (
        <section id="galeria" className="relative py-24 md:py-32" data-testid="gallery-section">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <Reveal className="flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-xl">
                        <Eyebrow>Galería</Eyebrow>
                        <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold text-ink leading-tight tracking-tight">
                            El local, los sabores
                            <em className="italic text-amber"> y las caras felices</em>
                        </h2>
                    </div>
                    <p className="text-cocoa max-w-sm leading-relaxed">
                        Un vistazo por dentro de Charlotte's: la barra, la
                        vitrina y esos momentos que se nos quedan grabados.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] md:auto-rows-[190px] gap-4">
                        {GALLERY.map((g, i) => (
                            <button
                                key={g.src}
                                data-testid={`gallery-image-${i}`}
                                onClick={() => setSelected(i)}
                                className={`group relative overflow-hidden rounded-3xl ${spanClass[g.span]} focus:outline-none focus-visible:ring-2 focus-visible:ring-amber`}
                            >
                                <img
                                    src={g.src}
                                    alt={g.alt}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"
                                />
                                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/25 transition-colors duration-500" />
                                <span className="absolute bottom-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-paper/90 text-espresso opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <Expand size={15} />
                                </span>
                            </button>
                        ))}
                    </div>
                </Reveal>
            </div>

            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        data-testid="gallery-lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={close}
                        className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/90 backdrop-blur-md p-6 cursor-zoom-out"
                    >
                        <motion.figure
                            initial={{ scale: 0.92, y: 24 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.94, y: 16 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={GALLERY[selected].src}
                                alt={GALLERY[selected].alt}
                                className="w-full max-h-[76vh] object-contain rounded-3xl shadow-2xl"
                                data-testid="lightbox-image"
                            />
                            <figcaption className="mt-4 text-center text-sm text-cream/80">
                                {GALLERY[selected].alt}
                            </figcaption>
                        </motion.figure>
                        <button
                            data-testid="lightbox-close-button"
                            onClick={close}
                            aria-label="Cerrar galería"
                            className="absolute top-6 right-6 inline-flex items-center justify-center w-11 h-11 rounded-full bg-paper/10 text-cream border border-cream/25 hover:bg-paper/25 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Galeria;
