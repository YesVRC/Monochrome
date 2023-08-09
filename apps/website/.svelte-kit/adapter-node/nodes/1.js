

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.84b6cc70.js","_app/immutable/chunks/index.795fd1b6.js","_app/immutable/chunks/singletons.90d49715.js","_app/immutable/chunks/paths.ffc880be.js"];
export const stylesheets = [];
export const fonts = [];
