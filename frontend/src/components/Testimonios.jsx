import { Reveal, Eyebrow, Stars } from "./Reveal";
import { BUSINESS, TESTIMONIALS } from "../data/content";
import { useGoogleRating } from "../lib/useGoogleRating";

const Testimonios = () => {
    const { rating: liveRating, mapsUrl } = useGoogleRating();
    const ratingValue = liveRating || BUSINESS.rating;

    return (
        <section
            id="opiniones"
            className="relative py-24 md:py-32 bg-espresso text-cream overflow-hidden"
            data-testid="testimonials-section"
        >
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber/10 blur-3xl pointer-events-none" />
            <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
                <Reveal className="text-center max-w-2xl mx-auto">
                    <Eyebrow light>Opiniones de vecinos</Eyebrow>
                    <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                        Valdemoro ya tiene su
                        <em className="italic text-amber"> sabor favorito</em>
                    </h2>
                    <div
                        className="mt-7 inline-flex flex-col items-center gap-2 rounded-3xl border border-cream/15 bg-cream/5 px-10 py-6"
                        data-testid="testimonials-rating-summary"
                    >
                        <p className="font-display text-5xl font-bold">
                            {ratingValue}
                            <span className="text-amber text-2xl align-top">★</span>
                        </p>
                        <p className="text-sm text-cream/70">
                            Uno de los locales mejor valorados de Valdemoro
                        </p>
                        {mapsUrl && (
                            <a
                                data-testid="rating-maps-link"
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium text-amber underline underline-offset-2 hover:text-cream transition-colors"
                            >
                                Ver en Google Maps
                            </a>
                        )}
                    </div>
                </Reveal>

                <div className="mt-14 grid md:grid-cols-2 gap-5">
                    {TESTIMONIALS.map((t, i) => (
                        <Reveal key={t.name} delay={i * 0.08} className="h-full">
                            <figure
                                className="h-full flex flex-col rounded-[28px] border border-cream/10 bg-cream/[0.04] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-cream/[0.07]"
                                data-testid="testimonial-card"
                            >
                                <Stars count={t.stars} size={16} />
                                <blockquote className="mt-5 flex-1 text-cream/85 leading-relaxed">
                                    “{t.text}”
                                </blockquote>
                                <figcaption className="mt-7 flex items-center gap-3.5">
                                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-amber/20 border border-amber/40 font-display font-semibold text-amber shrink-0">
                                        {t.initials}
                                    </span>
                                    <span>
                                        <span className="block font-semibold">{t.name}</span>
                                        <span className="block text-xs text-cream/55">
                                            Reseña real · Google
                                        </span>
                                    </span>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <p className="mt-12 text-center text-sm text-cream/50">
                        Gracias a cada familia, vecino y curioso que entra por la
                        puerta. Vuestro cariño se nota en cada reseña.
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Testimonios;
