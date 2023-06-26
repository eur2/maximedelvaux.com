import { c as create_ssr_component, b as subscribe } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$page.url.pathname === "/" ? `<header class="fixed t0 r0 z10 max"><h1><button data-svelte-h="svelte-1q8tyik">Maxime Delvaux</button></h1> ${``}</header>` : ``} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
