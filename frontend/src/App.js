import { useEffect, Component } from "react";
import Lenis from "lenis";
import { Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import TrustBar from "./components/TrustBar";
import MenuSection from "./components/MenuSection";
import Galeria from "./components/Galeria";
import Testimonios from "./components/Testimonios";
import Encargos from "./components/Encargos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { BUSINESS } from "./data/content";
import "./App.css";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-cream text-ink text-center p-8">
                    <div>
                        <p className="font-display text-3xl font-bold">Uy, se nos derritió algo…</p>
                        <p className="mt-3 text-cocoa">Recarga la página y seguimos con lo dulce.</p>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

const MobileCallFab = () => (
    <a
        data-testid="mobile-call-button"
        href={BUSINESS.phoneHref}
        className="fixed bottom-5 right-5 z-50 lg:hidden inline-flex items-center gap-2.5 rounded-full bg-berry text-cream pl-5 pr-6 py-4 font-semibold shadow-[0_18px_40px_-10px_rgba(217,93,85,0.65)] active:scale-95 transition-transform"
        aria-label={`Llamar al ${BUSINESS.phoneDisplay}`}
    >
        <Phone size={18} />
        Llamar
    </a>
);

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        window.__lenis = lenis;
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <ErrorBoundary>
            <div className="grain bg-cream text-ink font-body antialiased selection:bg-amber selection:text-cream">
                <Navbar />
                <main>
                    <Hero />
                    <Marquee />
                    <TrustBar />
                    <MenuSection />
                    <Galeria />
                    <Testimonios />
                    <Encargos />
                    <Contacto />
                </main>
                <Footer />
                <MobileCallFab />
            </div>
        </ErrorBoundary>
    );
}

export default App;
