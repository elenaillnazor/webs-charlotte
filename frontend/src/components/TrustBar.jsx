import { IceCreamCone, HeartHandshake, MapPin } from "lucide-react";
import { Reveal, Eyebrow, Stars } from "./Reveal";
import { BUSINESS } from "../data/content";

const highlights = [
    {
        icon: IceCreamCone,
        title: "Hecho cada mañana",
        text: "Helado batido a diario y repostería casera. Si acaba, se acaba, pero casi nunca acaba.",
    },
    {
        icon: HeartHandshake,
        title: "Trato de familia",
        text: "Te atendemos como en casa: con calma, con una sonrisa y con el dato de siempre para el que repite.",
    },
    {
        icon: MapPin,
        title: "En el corazón de El Restón",
        text: "Dentro del Centro Comercial El Restón, de camino a las compras y a la salida del cine.",
    },
];

const TrustBar = () => (
    <section className="relative py-24 md:py-32" data-testid="trust-section">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
            <Reveal>
                <div className="relative rounded-[40px] bg-espresso text-cream p-10 md:p-14 overflow-hidden">
                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber/20 blur-3xl" />
                    <Eyebrow light>Mejor valorados de Valdemoro</Eyebrow>
                    <div className="mt-8 flex items-end gap-6" data-testid="rating-value">
                        <p className="font-display text-7xl md:text-8xl font-bold leading-none">
                            {BUSINESS.rating}
                        </p>
                        <div className="pb-2">
                            <Stars size={18} />
                            <p className="mt-2 text-sm text-cream/70">
                                Valoración de nuestros vecinos
                            </p>
                        </div>
                    </div>
                    <p className="mt-8 text-cream/85 leading-relaxed max-w-md">
                        Nuestra nota no la ponemos nosotros: la ponen los vecinos,
                        las familias y los que ya tienen su sabor de cabecera.
                        Gracias por hacernos uno de los locales mejor valorados
                        de Valdemoro.
                    </p>
                </div>
            </Reveal>

            <div>
                <Reveal>
                    <Eyebrow>Por qué volverán</Eyebrow>
                    <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold text-ink leading-tight tracking-tight">
                        Una heladería con alma de barrio,
                        <em className="italic text-amber"> en tu centro comercial</em>
                    </h2>
                </Reveal>
                <div className="mt-10 grid gap-4">
                    {highlights.map((h, i) => (
                        <Reveal key={h.title} delay={i * 0.08}>
                            <div
                                className="group flex gap-5 rounded-3xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-20px_rgba(43,27,23,0.3)]"
                                data-testid="trust-highlight-card"
                            >
                                <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-creamsoft text-amber transition-colors duration-300 group-hover:bg-amber group-hover:text-cream">
                                    <h.icon size={22} strokeWidth={1.8} />
                                </span>
                                <div>
                                    <h3 className="font-display text-xl font-semibold text-ink">
                                        {h.title}
                                    </h3>
                                    <p className="mt-1 text-sm md:text-[0.95rem] text-cocoa leading-relaxed">
                                        {h.text}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default TrustBar;
