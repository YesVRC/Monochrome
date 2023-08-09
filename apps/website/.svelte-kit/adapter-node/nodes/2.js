

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.2eea9a31.js","_app/immutable/chunks/index.795fd1b6.js"];
export const stylesheets = ["_app/immutable/assets/2.eb8f7c3a.css"];
export const fonts = [];
