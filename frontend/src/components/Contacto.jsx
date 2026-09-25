import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { BUSINESS, IMAGES } from "../data/content";

const isOpen = () => {
    const h = new Date().getHours();
    return h < 22;
};

const Contacto = () => (
    <section id="contacto" className="relative py-24 md:py-32" data-testid="contact-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
                <div className="rounded-[40px] bg-espresso text-cream overflow-hidden grid lg:grid-cols-2 shadow-[0_40px_90px_-30px_rgba(43,27,23,0.55)]">
                    <div className="p-9 md:p-14">
                        <Eyebrow light>Contacto y ubicación</Eyebrow>
                        <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                            Ven a vernos,
                            <em className="italic text-amber"> estamos de camino</em>
                        </h2>

                        <div
                            data-testid="hours-highlight"
                            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/5 px-5 py-4"
                        >
                            <span className="relative flex items-center justify-center w-3 h-3">
                                {isOpen() && (
                                    <span className="absolute inline-flex w-full h-full rounded-full bg-[#7FC97F] soft-ping" />
                                )}
                                <span
                                    className={`relative inline-flex w-3 h-3 rounded-full ${
                                        isOpen() ? "bg-[#7FC97F]" : "bg-berry"
                                    }`}
                                />
                            </span>
                            <p className="text-sm md:text-base">
                                {isOpen() ? (
                                    <>
                                        <strong className="font-semibold">Abierto ahora</strong> · todos
                                        los días <strong className="text-amber font-semibold">hasta las 22:00</strong>
                                    </>
                                ) : (
                                    <>
                                        <strong className="font-semibold">Cerrado por hoy</strong> · mañana
                                        te esperamos <strong className="text-amber font-semibold">hasta las 22:00</strong>
                                    </>
                                )}
                            </p>
                        </div>

                        <ul className="mt-9 space-y-5">
                            <li className="flex gap-4">
                                <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-amber/15 text-amber">
                                    <MapPin size={19} />
                                </span>
                                <div data-testid="contact-address">
                                    <p className="font-semibold">{BUSINESS.addressLine1}</p>
                                    <p className="text-sm text-cream/70 mt-0.5">
                                        {BUSINESS.addressLine2} · {BUSINESS.addressLine3}
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-amber/15 text-amber">
                                    <Phone size={19} />
                                </span>
                                <div>
                                    <p className="font-semibold">Teléfono</p>
                                    <a
                                        data-testid="contact-phone-link"
                                        href={BUSINESS.phoneHref}
                                        className="text-sm text-cream/70 mt-0.5 inline-block hover:text-amber transition-colors"
                                    >
                                        {BUSINESS.phoneDisplay} — para encargos, tarta-helado y celebraciones
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-amber/15 text-amber">
                                    <Clock size={19} />
                                </span>
                                <div>
                                    <p className="font-semibold">Horario</p>
                                    <p className="text-sm text-cream/70 mt-0.5">
                                        Abierto todos los días, cierre a las{" "}
                                        <strong className="text-amber font-semibold">22:00</strong>
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                data-testid="contact-call-button"
                                href={BUSINESS.phoneHref}
                                className="inline-flex items-center gap-2.5 rounded-full bg-amber text-cream px-7 py-4 font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_16px_36px_-12px_rgba(200,125,72,0.6)]"
                            >
                                <Phone size={17} /> Llamar ahora
                            </a>
                            <a
                                data-testid="contact-maps-link"
                                href={BUSINESS.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-7 py-4 font-semibold text-cream transition-all duration-300 hover:bg-cream/10 active:scale-95"
                            >
                                <Navigation size={16} /> Cómo llegar
                            </a>
                        </div>
                    </div>

                    <div className="relative min-h-[340px] lg:min-h-0">
                        <img
                            src={IMAGES.interiorBright}
                            alt="Interior acogedor de Charlotte's Coffee & Ice Cream"
                            className="absolute inset-0 w-full h-full object-cover"
                            data-testid="contact-image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/30 to-transparent" />
                        <div className="absolute bottom-6 right-6 left-6 lg:left-auto rounded-3xl bg-paper/95 text-ink p-6 backdrop-blur shadow-xl">
                            <p className="font-script text-2xl text-amber">El Restón</p>
                            <p className="mt-1 text-sm text-cocoa leading-relaxed">
                                Nos encontrarás dentro del {BUSINESS.mall}, en
                                Valdemoro. Perfecto para la parada después de las
                                compras o antes del cine.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

export default Contacto;
