const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  e + "/_app/immutable/entry/app.58976e47.js",
  e + "/_app/immutable/assets/0.9ea41f74.css",
  e + "/_app/immutable/nodes/0.1f6032c4.js",
  e + "/_app/immutable/nodes/1.287ce18b.js",
  e + "/_app/immutable/nodes/2.815fbf86.js",
  e + "/_app/immutable/nodes/3.926ce9f8.js",
  e + "/_app/immutable/chunks/index.6d7721eb.js",
  e + "/_app/immutable/chunks/scheduler.6a4f3e46.js",
  e + "/_app/immutable/chunks/siema.min.5638367e.js",
  e + "/_app/immutable/chunks/singletons.ac8ba5f4.js",
  e + "/_app/immutable/chunks/stores.e9c81550.js",
  e + "/_app/immutable/entry/start.23d13e14.js"
], p = [
  e + "/NSPOT-Bold.woff",
  e + "/NSPOT-Bold.woff2",
  e + "/favicon.png",
  e + "/logo-192.png",
  e + "/logo-512.png",
  e + "/manifest.json",
  e + "/robots.txt"
], u = "1687798580346", i = `cache-${u}`, o = [
  ...l,
  // the app itself
  ...p
  // everything in `static`
];
self.addEventListener("install", (s) => {
  async function a() {
    await (await caches.open(i)).addAll(o);
  }
  s.waitUntil(a());
});
self.addEventListener("activate", (s) => {
  async function a() {
    for (const t of await caches.keys())
      t !== i && await caches.delete(t);
  }
  s.waitUntil(a());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function a() {
    const t = new URL(s.request.url), n = await caches.open(i);
    if (o.includes(t.pathname))
      return n.match(s.request);
    try {
      const c = await fetch(s.request);
      return c.status === 200 && n.put(s.request, c.clone()), c;
    } catch {
      return n.match(s.request);
    }
  }
  s.respondWith(a());
});
