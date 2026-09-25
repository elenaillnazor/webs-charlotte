export const LogoMark = ({ className = "w-10 h-10" }) => (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="#C87D48" />
        <circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke="#FAF6F0"
            strokeWidth="2"
            opacity="0.55"
        />
        <text
            x="30"
            y="45"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="38"
            fontStyle="italic"
            fontWeight="700"
            fill="#FAF6F0"
            textAnchor="middle"
        >
            C
        </text>
        <circle cx="45" cy="17" r="5.5" fill="#D95D55" />
        <path
            d="M45 11.5c1.2-2.2 3.2-3.4 5.5-3.6"
            stroke="#FAF6F0"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
        />
    </svg>
);

export const Logo = ({ light = false }) => (
    <a
        href="#inicio"
        data-testid="logo-link"
        onClick={(e) => {
            e.preventDefault();
            import("../lib/scroll").then((m) => m.scrollToId("inicio"));
        }}
        className="flex items-center gap-3 group"
        aria-label="Charlotte's Coffee & Ice Cream — inicio"
    >
        <LogoMark className="w-10 h-10 md:w-11 md:h-11 transition-transform duration-500 group-hover:rotate-[8deg]" />
        <span className="leading-none text-left">
            <span
                className={`block font-script text-2xl md:text-[1.65rem] tracking-wide ${
                    light ? "text-cream" : "text-ink"
                }`}
            >
                Charlotte's
            </span>
            <span
                className={`block text-[0.55rem] font-semibold tracking-[0.32em] uppercase mt-0.5 ${
                    light ? "text-cream/70" : "text-amber"
                }`}
            >
                Coffee &amp; Ice Cream
            </span>
        </span>
    </a>
);
