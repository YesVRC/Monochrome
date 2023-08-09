

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/connect/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.54c5fe80.js","_app/immutable/chunks/index.795fd1b6.js"];
export const stylesheets = [];
export const fonts = [];
