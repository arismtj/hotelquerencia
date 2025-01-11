/* empty css                                    */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_8DoDugRq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D7t-83pO.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactenos", "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-form  box-border" data-astro-cid-2mxdoeuz> <div class="infor-form" data-astro-cid-2mxdoeuz> <h4 class="text-center xl:text-4xl md:text-3xl text-2xl font-bold p-3" data-astro-cid-2mxdoeuz>Contactanos</h4> <p class="p-2 mx-8 font-dancing xl:text-center md:text-center text-justify  font-semibold text-lg " data-astro-cid-2mxdoeuz>
¿Tienes alguna pregunta o necesitas ayuda con tu reserva? Nuestro equipo dedicado está disponible las 24 horas del día para brindarle un servicio rápido y amigable.
</p> <div class="flex space-x-2 ml-10 mt-5" data-astro-cid-2mxdoeuz> <img src="/llamar.png" class="size-10" data-astro-cid-2mxdoeuz> <p class="my-auto" data-astro-cid-2mxdoeuz>953 678 592</p> </div> <div class="flex space-x-2 ml-10 mt-5" data-astro-cid-2mxdoeuz> <img src="/correo.png" class="size-10" data-astro-cid-2mxdoeuz> <p class="my-auto" data-astro-cid-2mxdoeuz>jfpintov@hotmail.com</p> </div> </div> <!--formulario --> <form action="https://formsubmit.co/arismartintj@gmail.com" method="POST" autocomplete="off" class="form" data-astro-cid-2mxdoeuz> <input type="text" name="name" id="name" placeholder="ingresa tus datos" class="campo" data-astro-cid-2mxdoeuz> <input type="email" name="email" id="email" placeholder="ingresa tu correo electronico" class="campo" data-astro-cid-2mxdoeuz> <textarea name="mensaje" placeholder="escribe tu mensaje" data-astro-cid-2mxdoeuz></textarea> <input type="submit" value="Enviar " class="btn-enviar" data-astro-cid-2mxdoeuz> <input type="hidden" name="_next" value="http://localhost:4321/contacto" data-astro-cid-2mxdoeuz> <input type="hidden" name="_captcha" value="false" data-astro-cid-2mxdoeuz> </form> </div> ` })} `;
}, "D:/proyectos/La_Querencia_Hotel/hotelquerencia/src/pages/contacto.astro", void 0);

const $$file = "D:/proyectos/La_Querencia_Hotel/hotelquerencia/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
