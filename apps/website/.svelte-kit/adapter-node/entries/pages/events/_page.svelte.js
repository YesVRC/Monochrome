import { c as create_ssr_component, o as is_promise, n as noop, j as each, a as add_attribute } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const get = async () => {
    const allimgsf = /* @__PURE__ */ Object.assign({ "/src/lib/posters/10_14_2022_poster_CSD.png": () => import("../../../chunks/10_14_2022_poster_CSD.js"), "/src/lib/posters/10_20_2022_poster popup.png": () => import("../../../chunks/10_20_2022_poster popup.js"), "/src/lib/posters/1_23_2023_Anniv_poster.png": () => import("../../../chunks/1_23_2023_Anniv_poster.js"), "/src/lib/posters/2_24_2023_poster.png": () => import("../../../chunks/2_24_2023_poster.js"), "/src/lib/posters/3_13_2023_popup.png": () => import("../../../chunks/3_13_2023_popup.js"), "/src/lib/posters/3_31_2023_TGL_Collab.png": () => import("../../../chunks/3_31_2023_TGL_Collab.js"), "/src/lib/posters/3_9_22 poster popup.png": () => import("../../../chunks/3_9_22 poster popup.js"), "/src/lib/posters/4_21_23_Spyral_X_Mono.png": () => import("../../../chunks/4_21_23_Spyral_X_Mono.js"), "/src/lib/posters/4_28_2023_TGL_Collab.png": () => import("../../../chunks/4_28_2023_TGL_Collab.js"), "/src/lib/posters/5_26_2023_TGL_Collab.png": () => import("../../../chunks/5_26_2023_TGL_Collab.js"), "/src/lib/posters/6_15_2022_popup.png": () => import("../../../chunks/6_15_2022_popup.js"), "/src/lib/posters/6_16_2023_event.png": () => import("../../../chunks/6_16_2023_event.js"), "/src/lib/posters/6_2_2022_popup.png": () => import("../../../chunks/6_2_2022_popup.js"), "/src/lib/posters/6_30_2023_TGL_Collab.png": () => import("../../../chunks/6_30_2023_TGL_Collab.js"), "/src/lib/posters/6_8_2022_popup.png": () => import("../../../chunks/6_8_2022_popup.js"), "/src/lib/posters/8_19_2022_poster.png": () => import("../../../chunks/8_19_2022_poster.js"), "/src/lib/posters/8_5_2022_poster.png": () => import("../../../chunks/8_5_2022_poster.js"), "/src/lib/posters/9_1_Poster.png": () => import("../../../chunks/9_1_Poster.js"), "/src/lib/posters/v2_6_2_2022_popup.png": () => import("../../../chunks/v2_6_2_2022_popup.js") });
    const iterableImages = Object.entries(allimgsf);
    const allimgs = await Promise.all(iterableImages.map(async ([path, resolver]) => {
      const imgPath = (
        /** @type {{default: string;}} */
        (await resolver()).default.slice(0, -4)
      );
      return {
        path: imgPath,
        name: imgPath.split("/").at(-1)
      };
    }));
    console.log(allimgs);
    return allimgs;
  };
  if ($$props.get === void 0 && $$bindings.get && get !== void 0)
    $$bindings.get(get);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(get2) {
      return `
    <div class="w-full h-full flex flex-row flex-wrap ">${each(Object.values(get2), (f) => {
        return `<div class="neon-surface card-hover hover:neon-success aspect-auto w-[50%] md:w-[30%] lg:w-[25%] xl:w-[15%] mx-auto my-3 p-1 rounded-xl "><img${add_attribute("src", f.path + ".png", 0)} class="w-fit">
            </div>`;
      })}</div>
`;
    }(__value);
  }(get())}`;
});
export {
  Page as default
};
