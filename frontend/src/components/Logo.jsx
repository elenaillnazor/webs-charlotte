export const LogoMark = ({ className = "w-10 h-10" }) => (
    <img
        src="/img/logo.png"
        alt=""
        className={`${className} select-none`}
        draggable="false"
        aria-hidden="true"
    />
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
        <span
            className={`inline-flex items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-[8deg] ${
                light ? "bg-cream p-1.5" : ""
            }`}
        >
            <LogoMark className="w-10 h-10 md:w-11 md:h-11" />
        </span>
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
