import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
