import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, BUSINESS } from "../data/content";
import { scrollToId } from "../lib/scroll";

const Footer = () => (
    <footer className="bg-[#221410] text-cream pt-16 pb-28 lg:pb-10" data-testid="footer">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid md:grid-cols-[1.2fr_0.8fr_1fr] gap-12">
                <div>
                    <Logo light />
                    <p className="mt-6 max-w-sm text-sm text-cream/65 leading-relaxed">
                        Heladería y cafetería artesanal en Valdemoro. Helados
                        batidos cada mañana, café de especialidad y postres
                        caseros para compartir con quien más quieres.
                    </p>
                    <a
                        data-testid="footer-instagram-link"
                        href={BUSINESS.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:border-amber hover:text-amber"
                    >
                        <Instagram size={16} />
                        {BUSINESS.instagramHandle}
                    </a>
                </div>
                <div>
                    <p className="text-xs font-semibold tracking-[0.28em] uppercase text-amber">
                        Secciones
                    </p>
                    <ul className="mt-5 space-y-3">
                        {NAV_LINKS.map((l) => (
                            <li key={l.id}>
                                <button
                                    data-testid={`footer-link-${l.id}`}
                                    onClick={() => scrollToId(l.id)}
                                    className="text-sm text-cream/70 hover:text-amber transition-colors"
                                >
                                    {l.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-xs font-semibold tracking-[0.28em] uppercase text-amber">
                        Encuéntranos
                    </p>
                    <ul className="mt-5 space-y-4 text-sm text-cream/70">
                        <li className="flex gap-3">
                            <Phone size={16} className="text-amber shrink-0 mt-0.5" />
                            <a href={BUSINESS.phoneHref} data-testid="footer-phone-link" className="hover:text-amber transition-colors">
                                {BUSINESS.phoneDisplay}
                            </a>
                        </li>
                        <li className="flex gap-3">
                            <MapPin size={16} className="text-amber shrink-0 mt-0.5" />
                            <span>
                                {BUSINESS.addressLine1}, {BUSINESS.addressLine3} —{" "}
                                {BUSINESS.mall}
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Clock size={16} className="text-amber shrink-0 mt-0.5" />
                            <span>
                                Abierto todos los días{" "}
                                <strong className="text-amber font-semibold">hasta las 22:00</strong>
                                <br />
                                <span className="text-cream/55">
                                    Lun–Vie desde las 9:00 · Sáb y Dom desde las 10:00
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-14 pt-7 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-cream/45">
                    © {new Date().getFullYear()} {BUSINESS.name}. Hecho con cariño en Valdemoro.
                </p>
                <p className="font-script text-lg text-cream/50">¡Nos vemos por El Restón!</p>
            </div>
        </div>
    </footer>
);

export default Footer;
