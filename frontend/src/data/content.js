export const BUSINESS = {
    name: "Charlotte's Coffee & Ice Cream",
    shortName: "Charlotte's",
    tagline: "Heladería & Cafetería Artesanal",
    rating: "4,7",
    reviewsCount: 46,
    phoneDisplay: "695 33 20 60",
    phoneHref: "tel:+34695332060",
    addressLine1: "Av. del Mar Mediterráneo, 3, Local 54",
    addressLine2: "Centro Comercial El Restón",
    addressLine3: "28341 Valdemoro, Madrid",
    hoursShort: "Abierto todos los días hasta las 22:00",
    hoursHighlight: "hasta las 22:00",
    mall: "Centro Comercial El Restón",
    mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Charlotte%27s+Coffee+%26+Ice+Cream+Centro+Comercial+El+Rest%C3%B3n+Av.+del+Mar+Mediterr%C3%A1neo+3+Valdemoro",
};

export const IMAGES = {
    heroGelato:
        "https://images.unsplash.com/photo-1648971413826-8377e3c65039?crop=entropy&cs=srgb&fm=jpg&q=85",
    heroCone:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=srgb&fm=jpg&q=85",
    gelatoBowls:
        "https://images.unsplash.com/photo-1629385744299-74b9cf013f52?crop=entropy&cs=srgb&fm=jpg&q=85",
    coffeeLatte:
        "https://images.unsplash.com/photo-1686315715890-9083c5c5c861?crop=entropy&cs=srgb&fm=jpg&q=85",
    pastryDisplay:
        "https://images.unsplash.com/photo-1534432182912-63863115e106?crop=entropy&cs=srgb&fm=jpg&q=85",
    tartsDessert:
        "https://images.unsplash.com/photo-1583338917451-face2751d8d5?crop=entropy&cs=srgb&fm=jpg&q=85",
    baristaPour:
        "https://images.unsplash.com/photo-1517701848373-805868efd0ac?crop=entropy&cs=srgb&fm=jpg&q=85",
    interiorWarm:
        "https://images.unsplash.com/photo-1645677020082-721a854c24f2?crop=entropy&cs=srgb&fm=jpg&q=85",
    interiorBright:
        "https://images.unsplash.com/photo-1621343607959-5d11ff0f1e39?crop=entropy&cs=srgb&fm=jpg&q=85",
    conesSprinkles:
        "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?crop=entropy&cs=srgb&fm=jpg&q=85",
    brownieSundae:
        "https://images.unsplash.com/photo-1606884285898-277317a7bf12?crop=entropy&cs=srgb&fm=jpg&q=85",
    caramelSundae:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?crop=entropy&cs=srgb&fm=jpg&q=85",
};

export const NAV_LINKS = [
    { id: "inicio", label: "Inicio" },
    { id: "carta", label: "Nuestra Carta" },
    { id: "galeria", label: "Galería" },
    { id: "opiniones", label: "Opiniones" },
    { id: "contacto", label: "Contacto" },
];

export const MARQUEE_ITEMS = [
    "Helados artesanales de temporada",
    "Café de especialidad",
    "Tartas y postres caseros",
    "Crepes, gofres y batidos",
    "Copa Charlotte, la de la casa",
    "El plan favorito de las familias",
];

export const MENU_CATEGORIES = [
    {
        id: "helados",
        label: "Helados Artesanales",
        icon: "icecream",
        image: IMAGES.gelatoBowls,
        blurb:
            "Batimos helado cada mañana con leche fresca y fruta de verdad. Pídelo en cono de gofre, tarrina o en copa grande para compartir.",
        items: [
            {
                name: "Tarta de Queso con Frutos Rojos",
                desc: "Nuestro sabor estrella: cremoso, dulce y con toque ácido.",
                tags: ["Top ventas"],
            },
            {
                name: "Pistacho Siciliano",
                desc: "Intenso y adictivo, el favorito de los que prueban una vez.",
                tags: ["Top ventas"],
            },
            {
                name: "Chocolate 70% Belga",
                desc: "Para los que aman el cacao de verdad, sin trampas.",
                tags: [],
            },
            {
                name: "Dulce de Leche Caramelizado",
                desc: "Como el de la sobremesa de casa, pero bien frío.",
                tags: [],
            },
            {
                name: "Frutas del Bosque",
                desc: "Fresquito y afrutado, el preferido de los peques.",
                tags: ["Sin lactosa"],
            },
            {
                name: "Mango y Maracuyá",
                desc: "Sorbete tropical 100% vegetal, puro verano.",
                tags: ["Vegano"],
            },
        ],
    },
    {
        id: "cafes",
        label: "Cafés de Especialidad",
        icon: "coffee",
        image: IMAGES.coffeeLatte,
        blurb:
            "Café recién pasado, leche templada y espuma como debe ser. Para desayunar, para la pausa de las cinco o para alargar la sobremesa.",
        items: [
            {
                name: "Espresso de la Casa",
                desc: "Corto, con cuerpo y crema avellana.",
                tags: [],
            },
            {
                name: "Cappuccino",
                desc: "Espuma sedosa con un toque de cacao.",
                tags: ["Top ventas"],
            },
            {
                name: "Latte de Vainilla o Caramelo",
                desc: "Suave, dulce y muy fotogénico.",
                tags: [],
            },
            {
                name: "Café con Leche de la Casa",
                desc: "El de siempre, servido calentito en taza grande.",
                tags: [],
            },
            {
                name: "Frappé de Café con Nata",
                desc: "Batido frío con hielo, ideal para la tarde.",
                tags: [],
            },
            {
                name: "Chocolate Caliente Casero",
                desc: "Espeso, a la taza, con trocitos de chocolate.",
                tags: ["Top ventas"],
            },
        ],
    },
    {
        id: "postres",
        label: "Postres & Repostería",
        icon: "cake",
        image: IMAGES.brownieSundae,
        blurb:
            "Repostería hecha en casa para terminar (o empezar) con una sonrisa. Pregunta por el postre del día, nunca sabemos qué saldrá.",
        items: [
            {
                name: "Brownie Tibio con Helado",
                desc: "Caliente, crujiente por fuera y con bola de vainilla.",
                tags: ["Top ventas"],
            },
            {
                name: "Copa Charlotte",
                desc: "La copa de la casa: tres bolas, nata y nuestros toppings.",
                tags: ["Top ventas"],
            },
            {
                name: "Crepes de Chocolate y Plátano",
                desc: "Finitas, calentitas y muy compartibles.",
                tags: [],
            },
            {
                name: "Gofre Artesanal",
                desc: "Crujiente, con nata montada y sirope templado.",
                tags: [],
            },
            {
                name: "Tarta de la Abuela",
                desc: "La de galleta y crema, como manda la tradición.",
                tags: [],
            },
            {
                name: "Affogato al Caffè",
                desc: "Helado de vainilla ahogado en espresso caliente.",
                tags: [],
            },
        ],
    },
];

export const TESTIMONIALS = [
    {
        name: "María G.",
        initials: "MG",
        stars: 5,
        text: "Fuimos con los niños después de pasear por El Restón y acertamos de lleno. El helado de tarta de queso está de diez y el trato, como si fuéramos de la familia. Repetiremos seguro.",
    },
    {
        name: "Javier R.",
        initials: "JR",
        stars: 5,
        text: "Para mí, el mejor café de Valdemoro. Se nota que cuidan cada detalle y siempre te reciben con una sonrisa. Es nuestro plan fijo de los domingos después de la siesta.",
    },
    {
        name: "Lucía M.",
        initials: "LM",
        stars: 5,
        text: "Cada semana hay un sabor nuevo y siempre aciertan. El de pistacho es adictivo, se lo digo a todo el mundo. La heladería más rica del pueblo, y esto lo firman mis hijos.",
    },
];

export const GALLERY = [
    { src: IMAGES.gelatoBowls, alt: "Bolas de helado artesanal servidas en copa", span: "lg" },
    { src: IMAGES.baristaPour, alt: "Barista preparando café con arte en la barra", span: "wide" },
    { src: IMAGES.conesSprinkles, alt: "Conos de helado con fritas de colores", span: "sm" },
    { src: IMAGES.caramelSundae, alt: "Sundae con caramelo caliente", span: "sm" },
    { src: IMAGES.pastryDisplay, alt: "Vitrina de repostería y ambiente del local", span: "sm" },
    { src: IMAGES.interiorWarm, alt: "Interior acogedor de la cafetería", span: "wide" },
];
