import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, k as renderSlot, l as renderHead, i as renderComponent } from './astro/server_8DoDugRq.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$1 = createAstro();
const $$MenuItemView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MenuItemView;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="hover:text-yellow-700 text-white font-serif font-extrabold xl:text-2xl md:text-xl text-2xl transition-colors " data-astro-cid-okteg42t> <a${addAttribute(url, "href")} data-astro-cid-okteg42t>${title}</a> </li> `;
}, "D:/proyectos/La_Querencia_Hotel/hotelquerencia/src/components/MenuItemView.astro", void 0);

const menuItems = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Habitaciones",
    url: "/habitaciones"
  },
  {
    title: "Galeria",
    url: "/galeria"
  },
  {
    title: "Contacto",
    url: "/contacto"
  }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="foooter" data-astro-cid-sz7xmlte> <div class="mt-2 bg-[#718c98] grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2 w-full" data-astro-cid-sz7xmlte> <div class="footer-content mx-auto m-2 p-4" data-astro-cid-sz7xmlte> <img src="/querenciahotellogo.png" class="w-40" data-astro-cid-sz7xmlte> </div> <div class="footer-content text-white mx-auto m-2 p-4 space-y-2 justify-center items-center" data-astro-cid-sz7xmlte> <div class="flex space-x-2" data-astro-cid-sz7xmlte> <img src="/llamar.png" class="size-10" data-astro-cid-sz7xmlte> <h4 class="text-center xl:text-xl " data-astro-cid-sz7xmlte>953 678 592</h4> </div> <div class="flex space-x-2 text-white" data-astro-cid-sz7xmlte> <img src="/correo.png" class="size-8" data-astro-cid-sz7xmlte> <h4 class="text-center text-xl" data-astro-cid-sz7xmlte>jfpintov@hotmail.com</h4> </div> <div class="flex space-x-2" data-astro-cid-sz7xmlte> <img src="/ubicacion.png" class="size-9" data-astro-cid-sz7xmlte> <h4 class="text-center text-xl" data-astro-cid-sz7xmlte>
Panamericana sur km 97.5 lote 5A, Asia, Peru
</h4> </div> </div> <div class="footer-content text-white mx-auto m-2" data-astro-cid-sz7xmlte> <a href="/habitaciones" data-astro-cid-sz7xmlte> <h4 class="text-center text-xl" data-astro-cid-sz7xmlte>HABITACIONES</h4> </a> <a href="/contacto" data-astro-cid-sz7xmlte> <h4 class="text-center text-xl" data-astro-cid-sz7xmlte>CONTACTENOS</h4> </a> </div> </div> <div class="bg-[#718c98]" data-astro-cid-sz7xmlte> <h4 class="text-white text-center" data-astro-cid-sz7xmlte>
DERECHOS RESERVADOS 2024 "LA QUERENCIA"
</h4> </div> </footer> `;
}, "D:/proyectos/La_Querencia_Hotel/hotelquerencia/src/components/Footer.astro", void 0);

const $$Nav2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="" data-astro-cid-5yrma6dk> <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"> <div class="head fixed top-0 left-0 w-[100%] flex justify-between items-center z-[100]" data-astro-cid-5yrma6dk> <div class="logo" data-astro-cid-5yrma6dk> <a href="/" data-astro-cid-5yrma6dk> <img src="/querenciahotellogo.png" class=" w-36" data-astro-cid-5yrma6dk> </a> </div> <input type="checkbox" id="check" data-astro-cid-5yrma6dk> <label for="check" class="icons" data-astro-cid-5yrma6dk> <i class="bx bx-menu" id="menu-icon" data-astro-cid-5yrma6dk></i> <i class="bx bx-x" id="close-icon" data-astro-cid-5yrma6dk></i> </label> <nav class="navbar " data-astro-cid-5yrma6dk> <ul class=" flex space-x-12 mx-auto justify-center items-center" data-astro-cid-5yrma6dk> ${renderSlot($$result, $$slots["default"])} </ul> </nav> </div> <!--scripts --> </header> `;
}, "D:/proyectos/La_Querencia_Hotel/hotelquerencia/src/components/Navbar/Nav2.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>La Querencia Hotel| </title><meta name="description" content="Disfruta de un Estancia Única en Nuestro Hotel Frente al Mar en Asia">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="principal" data-astro-cid-sckkx6r4> <header data-astro-cid-sckkx6r4> ${renderComponent($$result, "Nav2", $$Nav2, { "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`${menuItems.map((item) => renderTemplate`${renderComponent($$result2, "MenuItemView", $$MenuItemView, { ...item, "data-astro-cid-sckkx6r4": true })}`)}` })} </header> <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer data-astro-cid-sckkx6r4> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </footer> </div> </body></html>`;
}, "D:/proyectos/La_Querencia_Hotel/hotelquerencia/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
