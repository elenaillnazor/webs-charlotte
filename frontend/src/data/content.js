export const BUSINESS = {
    name: "Charlotte's Coffee & Ice Cream",
    shortName: "Charlotte's",
    tagline: "Heladería & Cafetería Artesanal",
    rating: "4,7",
    reviewsCount: 46,
    phoneDisplay: "695 33 20 60",
    phoneHref: "tel:+34695332060",
    instagramUrl: "https://www.instagram.com/charlottes.coffee.icecream/?hl=es",
    instagramHandle: "@charlottes.coffee.icecream",
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
    realVitrina: "/img/vitrina.jpg",
    realLocal: "/img/local.jpg",
    realTostadita: "/img/tostadita.jpg",
    realIcecream: "/img/icecream.jpg",
    realCookies: "/img/cookies.jpg",
    realTortitas: "/img/tortitas.jpg",
    realFood: "/img/food.jpg",
    realSalmon: "/img/salmon.jpg",
    gelatoBowls:
        "https://images.unsplash.com/photo-1629385744299-74b9cf013f52?crop=entropy&cs=srgb&fm=jpg&q=85",
    pastryDisplay:
        "https://images.unsplash.com/photo-1534432182912-63863115e106?crop=entropy&cs=srgb&fm=jpg&q=85",
    tartsDessert:
        "https://images.unsplash.com/photo-1583338917451-face2751d8d5?crop=entropy&cs=srgb&fm=jpg&q=85",
    baristaPour:
        "https://images.unsplash.com/photo-1517701848373-805868efd0ac?crop=entropy&cs=srgb&fm=jpg&q=85",
    interiorWarm:
        "https://images.unsplash.com/photo-1645677020082-721a854c24f2?crop=entropy&cs=srgb&fm=jpg&q=85",
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
    "Bocadillos y tostadas hechas al momento",
    "Café de especialidad",
    "Tortitas, gofres y brownies",
    "Dulce Moment, nuestra tortita de autor",
    "El plan favorito de las familias",
];

export const MENU_CATEGORIES = [
    {
        id: "bocadillos",
        label: "Bocadillos",
        icon: "sandwich",
        image: IMAGES.realFood,
        blurb: "Bocadillos recién hechos con pan crujiente y producto de verdad. Perfectos para compartir después de las compras.",
        note: null,
        groups: [
            {
                subtitle: null,
                items: [
                    { name: "Salmón y rúcula", desc: "Queso crema, rúcula, salmón y huevo cocido", price: "7,00 €" },
                    { name: "Pastrami Bistró", desc: "Rúcula, pimientos, pastrami y salsa especial", price: "8,50 €" },
                    { name: "Castizo", desc: "Chorizo, bacon y tomate", price: "6,00 €" },
                    { name: "Atún mediterráneo", desc: "Atún, aguacate y tomate cherry", price: "5,50 €" },
                    { name: "Tortilla", desc: "Tortilla de patata y mayonesa", price: "4,50 €" },
                ],
            },
        ],
    },
    {
        id: "salado",
        label: "Salado",
        icon: "croissant",
        image: IMAGES.realSalmon,
        blurb: "Nuestros salados, servidos en pan croissant dorado y crujiente.",
        note: null,
        groups: [
            {
                subtitle: null,
                items: [
                    { name: "Veggie", desc: "Atún, lechuga, tomate y mayonesa", price: "5,00 €" },
                    { name: "Mixto", desc: "Jamón york y queso fundido", price: "4,00 €" },
                    { name: "Mixto con huevo", desc: "Jamón york, queso fundido y huevo", price: "4,70 €" },
                    { name: "Ibérico", desc: "Jamón serrano y queso", price: "4,50 €" },
                    { name: "Nórdico", desc: "Salmón, queso crema y rúcula", price: "6,00 €" },
                ],
            },
        ],
    },
    {
        id: "cafe",
        label: "Café",
        icon: "coffee",
        image: IMAGES.realCookies,
        blurb: "Café recién pasado y espuma como debe ser. Para desayunar o para la pausa de las cinco.",
        note: null,
        groups: [
            {
                subtitle: "Clásicos",
                items: [
                    { name: "Espresso / Solo", desc: null, price: "1,50 €" },
                    { name: "Café con leche", desc: "Normal · Grande", price: "1,80 € · 2,00 €" },
                    { name: "Doble espresso", desc: null, price: "2,00 €" },
                    { name: "Colacao / Nesquik", desc: null, price: "2,20 €" },
                    { name: "Té o infusión", desc: null, price: "2,00 €" },
                    { name: "Té inglés", desc: null, price: "2,40 €" },
                ],
            },
            {
                subtitle: "Especialidades",
                items: [
                    { name: "Cappuccino", desc: null, price: "2,30 €" },
                    { name: "Vienés", desc: null, price: "2,30 €" },
                    { name: "Bombón", desc: null, price: "2,30 €" },
                    { name: "Affogato", desc: null, price: "3,80 €" },
                ],
            },
        ],
    },
    {
        id: "dulce",
        label: "Dulce",
        icon: "cake",
        image: IMAGES.realTortitas,
        blurb: "Tortitas, gofres y brownies recién hechos. El final perfecto (o el principio).",
        note: "Añade helado a tus dulces por solo 2 € · Hazlo menú por solo 1 €",
        groups: [
            {
                subtitle: null,
                items: [
                    { name: "Tortitas", desc: "Con sirope y nata", price: "4,10 €" },
                    { name: "Gofres", desc: "Con sirope y nata", price: "3,95 €" },
                    { name: "Brownie", desc: "Con sirope y nata", price: "3,20 €" },
                ],
            },
        ],
    },
    {
        id: "helados",
        label: "Helados",
        icon: "icecream",
        image: IMAGES.gelatoBowls,
        blurb: "Helado artesanal batido cada mañana. En cono, tarrina, copa o para llevar a casa.",
        note: null,
        groups: [
            {
                subtitle: "Cono o tarrina",
                items: [
                    { name: "1 bola", desc: null, price: "3,20 €" },
                    { name: "2 bolas", desc: null, price: "5,20 €" },
                    { name: "3 bolas", desc: null, price: "7,00 €" },
                ],
            },
            {
                subtitle: "Copas de helado",
                items: [
                    { name: "Copa de 2 bolas", desc: "Con 2 toppings", price: "6,20 €" },
                    { name: "Copa de 3 bolas", desc: "Con 3 toppings", price: "8,00 €" },
                ],
            },
            {
                subtitle: "Para llevar",
                items: [
                    { name: "Medio litro", desc: null, price: "12,00 €" },
                    { name: "1 litro", desc: null, price: "19,00 €" },
                ],
            },
            {
                subtitle: "Extras",
                items: [
                    { name: "Toppings", desc: "Elige tus favoritos", price: "+0,25 €" },
                    { name: "Cono de chocolate", desc: "Sustituye tu cono", price: "+0,60 €" },
                ],
            },
        ],
    },
    {
        id: "bebidas",
        label: "Bebidas",
        icon: "cup",
        image: null,
        blurb: "Para acompañar cualquier momento: frescas, frías y bien servidas.",
        note: null,
        groups: [
            {
                subtitle: null,
                items: [
                    { name: "Agua pequeña", desc: null, price: "1,40 €" },
                    { name: "Agua grande", desc: null, price: "2,40 €" },
                    { name: "Zumo de naranja", desc: "Pequeño · Grande", price: "2,00 € · 3,00 €" },
                    { name: "Batidos y zumos bote", desc: null, price: "2,00 €" },
                    { name: "Tercio de cerveza", desc: null, price: "2,70 €" },
                    { name: "Tinto de verano", desc: null, price: "2,50 €" },
                    { name: "Granizados", desc: null, price: "3,80 €" },
                    { name: "Frappé de café", desc: null, price: "5,20 €" },
                    { name: "Milkshakes", desc: "1 o 2 sabores + sirope + nata", price: "5,20 €" },
                    { name: "Smoothies", desc: null, price: "5,00 €" },
                ],
            },
        ],
    },
    {
        id: "dulce-moment",
        label: "Dulce Moment",
        icon: "sparkles",
        image: IMAGES.tartsDessert,
        blurb: "Nuestras tortitas de autor, las que hacen que la gente vuelva de una semana para otra.",
        note: "Hazlo menú por solo 1 € más",
        groups: [
            {
                subtitle: null,
                items: [
                    { name: "La Clásica", desc: "Tortitas, sirope a elegir, nata y fresas frescas", price: "4,90 €" },
                    { name: "Choco Banana", desc: "Tortitas, sirope de chocolate, nata y plátano", price: "4,90 €" },
                    { name: "Bosque Dulce", desc: "Tortitas, sirope, frutos rojos y azúcar glass", price: "4,90 €" },
                    { name: "Fresh & Light", desc: "Tortitas, fresa, plátano y un toque de miel", price: "4,90 €" },
                ],
            },
        ],
    },
    {
        id: "tostadas",
        label: "Tostadas",
        icon: "wheat",
        image: IMAGES.realTostadita,
        blurb: "Tostadas hechas al momento, tan simples y tan buenas como deben ser.",
        note: "Clásicas disponibles hasta las 12:30 h · Hazlo menú por solo 1 € más",
        groups: [
            {
                subtitle: "Clásicas",
                items: [
                    { name: "Tomate + aceite de oliva", desc: null, price: "2,10 €" },
                    { name: "Mantequilla + mermelada", desc: null, price: "2,10 €" },
                ],
            },
            {
                subtitle: "Especiales",
                items: [
                    { name: "Salmón", desc: "Salmón, queso crema y eneldo", price: "4,50 €" },
                    { name: "Atún", desc: "Atún, tomate cherry y aceite de oliva", price: "3,50 €" },
                    { name: "Aguacate", desc: "Aguacate y huevo cocido", price: "3,50 €" },
                    { name: "Hummus", desc: "Hummus y tomate cherry", price: "3,00 €" },
                ],
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
    { src: IMAGES.realFood, alt: "Croissant con rúcula y tomate, café con hielo y galletas de Charlotte's", span: "sm" },
    { src: IMAGES.realSalmon, alt: "Tostada de salmón con crema de queso, hecha en el local", span: "sm" },
    { src: IMAGES.realTostadita, alt: "Tostada de aguacate con huevo cocido, al momento", span: "sm" },
    { src: IMAGES.interiorWarm, alt: "Interior acogedor de la cafetería", span: "wide" },
];
