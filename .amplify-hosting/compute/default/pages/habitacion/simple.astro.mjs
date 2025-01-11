/* empty css                                       */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_8DoDugRq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_D7t-83pO.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Simple = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "simple", "data-astro-cid-hsidt4vd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-hsidt4vd> <!--room amenities --> <div class="container mx-auto" data-astro-cid-hsidt4vd> <div class="m-3" data-astro-cid-hsidt4vd> <h4 class="amenidades text-2xl font-bold" data-astro-cid-hsidt4vd>
Amenidades de la habitación
</h4> <!--iconos --> <div class="m-5 gap-3 gap-y-10 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2" data-astro-cid-hsidt4vd> <div class="mx-auto flex gap-3" data-astro-cid-hsidt4vd> <img src="/iconos-cuartos/huesped-icon.png" class="size-12" data-astro-cid-hsidt4vd> <p class="my-auto p-2 text-lg font-semibold" data-astro-cid-hsidt4vd>1 huesped</p> </div> <div class="mx-auto flex gap-3" data-astro-cid-hsidt4vd> <img src="/iconos-cuartos/cama.png" class="size-12" data-astro-cid-hsidt4vd> <p class="my-auto p-2 text-lg font-semibold" data-astro-cid-hsidt4vd>1 Cama 1.5 plz</p> </div> <div class="mx-auto flex gap-3" data-astro-cid-hsidt4vd> <img src="/iconos-cuartos/escritorio-icon.png" class="size-12" data-astro-cid-hsidt4vd> <p class="my-auto p-2 text-lg font-semibold" data-astro-cid-hsidt4vd>Mesa de trabajo</p> </div> <div class="mx-auto flex gap-3" data-astro-cid-hsidt4vd> <img src="/iconos-cuartos/tv-icon.png" data-astro-cid-hsidt4vd> <p class="my-auto p-2 text-lg font-semibold" data-astro-cid-hsidt4vd>
Televisión por cable
</p> </div> <div class="mx-auto flex gap-3" data-astro-cid-hsidt4vd> <img src="/iconos-cuartos/toallas-icon.png" data-astro-cid-hsidt4vd> <p class="my-auto p-2 text-lg font-semibold" data-astro-cid-hsidt4vd>Toallas</p> </div> <div class="mx-auto flex gap-3" data-astro-cid-hsidt4vd> <img src="/iconos-cuartos/ducha-icon.png" data-astro-cid-hsidt4vd> <p class="my-auto p-2 text-lg font-semibold" data-astro-cid-hsidt4vd>Ducha</p> </div> <div class="mx-auto flex gap-3" data-astro-cid-hsidt4vd> <img src="/iconos-cuartos/wifi.png" class="size-12" data-astro-cid-hsidt4vd> <p class="my-auto p-2 text-lg font-semibold" data-astro-cid-hsidt4vd>Wifi</p> </div> <div class="mx-auto flex gap-3" data-astro-cid-hsidt4vd> <img src="/iconos-cuartos/jabon-icon.png" class="size-12" data-astro-cid-hsidt4vd> <p class="my-auto p-2 text-lg font-semibold" data-astro-cid-hsidt4vd>Jabon de baño</p> </div> </div> </div> </div> </section> ` })} `;
}, "D:/proyectos/La_Querencia_Hotel/hotelquerencia/src/pages/habitacion/Simple.astro", void 0);

const $$file = "D:/proyectos/La_Querencia_Hotel/hotelquerencia/src/pages/habitacion/Simple.astro";
const $$url = "/habitacion/Simple";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Simple,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
