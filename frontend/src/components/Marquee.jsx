import { Sparkles } from "lucide-react";
import { MARQUEE_ITEMS } from "../data/content";

const Marquee = () => (
    <div
        className="marquee-band relative -rotate-1 bg-espresso py-5 overflow-hidden shadow-[0_24px_60px_-24px_rgba(43,27,23,0.5)]"
        data-testid="marquee-band"
        aria-hidden="true"
    >
        <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center shrink-0">
                    {MARQUEE_ITEMS.map((item, i) => (
                        <span
                            key={`${copy}-${i}`}
                            className="flex items-center gap-6 pr-6 font-display italic text-cream text-lg md:text-xl whitespace-nowrap"
                        >
                            {item}
                            <Sparkles size={15} className="text-amber shrink-0" />
                        </span>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default Marquee;
