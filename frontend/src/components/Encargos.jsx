import { Phone, Instagram, Sparkles } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { BUSINESS, IMAGES } from "../data/content";

const Encargos = () => (
    <section id="encargos" className="relative py-24 md:py-32 overflow-hidden" data-testid="encargos-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
                <Eyebrow>Encargos para celebraciones</Eyebrow>
                <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold text-ink leading-tight tracking-tight">
                    ¿Celebramos algo?
                    <em className="italic text-amber"> Encarga tu tarta-helado</em>
                </h2>
                <p className="mt-5 text-cocoa leading-relaxed max-w-lg">
                    Cumpleaños, aniversarios o cualquier excusa buena: si viene
                    gente importante, llega tarta. Cuéntanos cuántos sois y qué
                    sabores te apetecen, y en Charlotte's preparamos una
                    tarta-helado a la altura del momento.
                </p>
                <p className="mt-4 text-cocoa leading-relaxed max-w-lg">
                    Encarga por teléfono o por Instagram y te confirmamos al
                    momento. Tú pones la celebración, nosotros ponemos el helado.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                    <a
                        data-testid="encargos-call-button"
                        href={BUSINESS.phoneHref}
                        className="inline-flex items-center gap-2.5 rounded-full bg-espresso text-cream px-7 py-4 font-semibold transition-all duration-300 hover:bg-amber hover:scale-[1.03] active:scale-95 shadow-[0_16px_36px_-12px_rgba(43,27,23,0.5)]"
                    >
                        <Phone size={17} /> Llamar para encargar
                    </a>
                    <a
                        data-testid="encargos-instagram-link"
                        href={BUSINESS.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 rounded-full border border-espresso/20 bg-paper/70 px-7 py-4 font-semibold text-espresso transition-all duration-300 hover:border-amber hover:text-amber active:scale-95"
                    >
                        <Instagram size={17} /> Escríbenos por Instagram
                    </a>
                </div>
                <p className="mt-6 flex items-center gap-2 text-sm text-sand">
                    <Sparkles size={14} className="text-amber" />
                    Te confirmamos tu encargo al momento, sin compromiso.
                </p>
            </Reveal>

            <Reveal delay={0.12}>
                <div className="relative mx-auto w-full max-w-[440px]">
                    <div className="overflow-hidden rounded-t-[999px] rounded-b-[36px] border-[6px] border-paper shadow-[0_40px_80px_-30px_rgba(43,27,23,0.45)]">
                        <img
                            src={IMAGES.realIcecream}
                            alt="Tarta de Charlotte's con vela, lista para celebrar"
                            className="w-full h-[420px] md:h-[520px] object-cover"
                            data-testid="encargos-image"
                        />
                    </div>
                    <div
                        className="absolute -right-3 top-10 rounded-2xl bg-paper/95 backdrop-blur border border-line px-5 py-4 shadow-[0_20px_44px_-16px_rgba(43,27,23,0.35)]"
                        data-testid="encargos-badge"
                    >
                        <p className="font-script text-2xl text-amber leading-none">¡Sorprende!</p>
                        <p className="text-xs font-medium text-cocoa mt-1.5">
                            Helado artesanal
                            <br />
                            para tu celebración
                        </p>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

export default Encargos;
