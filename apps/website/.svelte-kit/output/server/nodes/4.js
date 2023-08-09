

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.f1eb7150.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.795fd1b6.js"];
export const stylesheets = [];
export const fonts = [];
