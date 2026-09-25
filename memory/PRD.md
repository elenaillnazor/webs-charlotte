# PRD — Charlotte's Coffee & Ice Cream

## Problema original
Crear la estructura completa, el diseño y los textos persuasivos de la web de "Charlotte's Coffee & Ice Cream" (cafetería y heladería en CC El Restón, Valdemoro, Madrid), transmitiendo imagen profesional, acogedora, deliciosa y familiar. Secciones: Home (H1, subtítulo, CTA, sección de mejor valorado), Menú por categorías, Testimonios (4,7★/46 reseñas), Contacto y Ubicación, más sugerencias de diseño. Tono amable, cercano y profesional para familias, jóvenes y vecinos.

## Decisiones del usuario (turno 1)
- Una sola página con navegación por secciones
- Estilo cálido artesanal: cremas, chocolates, tonos café y vainilla
- CTA principal: llamar por teléfono (695 33 20 60)
- Sección extra: galería de fotos del local y productos
- Tienen logo de marca (no aportado: se diseñó SVG provisional sustituible)

## Arquitectura
- Frontend React (CRA/craco) + Tailwind + framer-motion + lenis (scroll con inercia). Sin backend propio necesario; backend FastAPI/Mongo del template intacto.
- Página única: Navbar fija → Hero cinético (reveal enmascarado línea a línea + tilt 3D + parallax) → Marquee editorial → Barra de confianza (4,7/46) → Carta con pestañas (Helados/Cafés/Postres) → Galería bento con lightbox → Testimonios (sección espresso oscura) → Contacto/Ubicación (tel:, horario 22:00, maps) → Footer + FAB móvil de llamada.
- Datos en src/data/content.js; favicon y marca SVG en public/favicon.svg y components/Logo.jsx.

## Estado (2026-09-25)
Implementado y verificado: página completa en español, CTA tel:+34695332060 en nav/hero/contacto/footer/FAB móvil, badge 4,7★·46 reseñas (hero + sección confianza + testimonios), pestañas de menú animadas con 3 categorías y 18 productos sugeridos (etiquetas Top ventas/Sin lactosa/Vegano), 3 testimonios simulados, galería bento con lightbox (tecla Escape), indicador dinámico "Abierto ahora / hasta las 22:00", link a Google Maps, SEO básico (title/meta en español) y favicon SVG.
Verificado con: curl /api/ OK; capturas desktop 1440 y móvil 390 (hero, menú con cambio de pestaña, galería con lightbox, testimonios, contacto); sin overflow horizontal.
Actualización (2026-09-25): integradas las 5 fotos reales del cliente (optimizadas ×3 en /public/img): helado en mostrador → héroe; galletas con café → panel Cafés; tortitas → panel Postres; croissant salado y tostada de salmón → galería. Overlay de paneles del menú reforzado para legibilidad sobre foto clara.
Actualización 2 (2026-09-25): menú REAL del cliente con precios en 8 pestañas (Bocadillos, Salado, Café con subgrupos, Dulce, Helados con subgrupos, Bebidas, Dulce Moment, Tostadas con notas de horario 12:30 y "hazlo menú +1 €"); logo original del cliente (emblema circular de mujer con flores) en nav/footer/favicon (fondo blanco→transparente, /img/logo.png); foto real de vitrina en el arco del héroe; foto real de la fachada/terraza en Contacto; tostada de aguacate en panel Tostadas y galería; enlaces a Instagram (@charlottes.coffee.icecream) en nav escritorio/móvil, contacto y footer.
Pendiente: fotos reales para paneles sin foto propia (Helados usa stock; Bebidas usa panel espresso con marca de agua del logo).

## Personas
- Familias de Valdemoro: buscan plan fácil con niños después de las compras o el cine.
- Jóvenes: buscan sabores nuevos, frappés, planes "instagrameables".
- Vecinos/locales: sobremesa y café diario de calidad cerca de casa.

## Backlog
- P0: Sustituir fotos de muestra por fotos reales del local; logo oficial de la marca.
- P1: Botón WhatsApp con mensaje predefinido; widget real de reseñas de Google; sección ofertas/novedades.
- P2: Multi-idioma (EN), formulario de encargos (tartas heladas) con backend.

## Notas de contenido
- Hechos aportados por el usuario usados tal cual: 4,7★, 46 reseñas, teléfono 695 33 20 60, dirección Av. del Mar Mediterráneo 3, Local 54, CC El Restón, 28341 Valdemoro, Madrid, cierre 22:00.
- Testimonios y productos: SIMULADOS/sugeridos según lo pedido por el usuario; sin precios (no facilitados).
