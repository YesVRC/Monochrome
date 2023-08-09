export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["discord-mark-blue.svg","favicon.png","favicon.png","posters/10_14_2022_poster_CSD.png","posters/10_20_2022_poster popup.png","posters/1_23_2023_Anniv_poster.png","posters/2_24_2023_poster.png","posters/3_13_2023_popup.png","posters/3_31_2023_TGL_Collab.png","posters/3_9_22 poster popup.png","posters/4_21_23_Spyral_X_Mono.png","posters/4_28_2023_TGL_Collab.png","posters/5_26_2023_TGL_Collab.png","posters/6_15_2022_popup.png","posters/6_16_2023_event.png","posters/6_2_2022_popup.png","posters/6_30_2023_TGL_Collab.png","posters/6_8_2022_popup.png","posters/8_19_2022_poster.png","posters/8_5_2022_poster.png","posters/9_1_Poster.png","posters/v2_6_2_2022_popup.png","V2_Icon_b.png","V2_Icon_p.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.94ca7223.js","app":"_app/immutable/entry/app.4f6d6e3b.js","imports":["_app/immutable/entry/start.94ca7223.js","_app/immutable/chunks/index.795fd1b6.js","_app/immutable/chunks/singletons.90d49715.js","_app/immutable/chunks/paths.ffc880be.js","_app/immutable/entry/app.4f6d6e3b.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.795fd1b6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/connect",
				pattern: /^\/connect\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
