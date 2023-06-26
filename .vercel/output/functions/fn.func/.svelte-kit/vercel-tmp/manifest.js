export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["NSPOT-Bold.woff","NSPOT-Bold.woff2","favicon.png","logo-192.png","logo-512.png","manifest.json","robots.txt","service-worker.js"]),
	mimeTypes: {".woff":"font/woff",".woff2":"font/woff2",".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.23d13e14.js","app":"_app/immutable/entry/app.58976e47.js","imports":["_app/immutable/entry/start.23d13e14.js","_app/immutable/chunks/scheduler.6a4f3e46.js","_app/immutable/chunks/singletons.ac8ba5f4.js","_app/immutable/entry/app.58976e47.js","_app/immutable/chunks/scheduler.6a4f3e46.js","_app/immutable/chunks/index.6d7721eb.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
