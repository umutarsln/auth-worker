				import worker, * as OTHER_EXPORTS from "/Users/umut/Desktop/Lectures/2024Spring/CSE344/sveltekit-worker-deneme/auth-worker/src/index.js";
				import * as __MIDDLEWARE_0__ from "/Users/umut/Desktop/Lectures/2024Spring/CSE344/sveltekit-worker-deneme/auth-worker/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/Users/umut/Desktop/Lectures/2024Spring/CSE344/sveltekit-worker-deneme/auth-worker/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/Users/umut/Desktop/Lectures/2024Spring/CSE344/sveltekit-worker-deneme/auth-worker/src/index.js";
				export default worker;