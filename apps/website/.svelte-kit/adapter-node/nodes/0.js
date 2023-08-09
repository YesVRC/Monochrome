

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7f39c2b7.js","_app/immutable/chunks/index.795fd1b6.js","_app/immutable/chunks/paths.ffc880be.js"];
export const stylesheets = ["_app/immutable/assets/0.f151c1cc.css"];
export const fonts = [];
