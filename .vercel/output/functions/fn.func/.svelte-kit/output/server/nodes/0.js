import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.1f6032c4.js","_app/immutable/chunks/scheduler.6a4f3e46.js","_app/immutable/chunks/index.6d7721eb.js","_app/immutable/chunks/stores.e9c81550.js","_app/immutable/chunks/singletons.ac8ba5f4.js"];
export const stylesheets = ["_app/immutable/assets/0.9ea41f74.css"];
export const fonts = [];
