import * as env from '@std/dotenv';
env.load();

import { Application } from '@oak/oak/application';
import { Router } from '@oak/oak/router';
import { pino } from 'pino';

import type { ApiResponse } from './interfaces.ts';

const router = new Router();
const logger = pino();

router.get('/api/search', async (ctx) => {
	const term = ctx.request.url.searchParams.get('term');
	logger.info({ person: { name: 'carlos', age: 23 } });

	if (!term) {
		ctx.response.status = 400;
		return (ctx.response.body = {
			message: 'A search term is required'
		});
	}

	const searchTerm = new URLSearchParams({ term });
	console.log(searchTerm.toString());

	const baseUrl = Deno.env.get('KEH_API_URL');
	console.log(baseUrl);
	const response = await fetch(`${baseUrl}&term=${searchTerm}`);
	const data: ApiResponse = await response.json();

	const productFound = data.result?.find(
		(product) =>
			product.keh_mount === 'sony e mount' && product.keh_product_type === 'bodies' && product.inStock === 'yes'
	);

	if (productFound) {
		return (ctx.response.body = {
			name: productFound.name,
			price: productFound.price,
			url: productFound.url
		});
	}

	return (ctx.response.status = 404);
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
