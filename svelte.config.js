import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import Icons from 'unplugin-icons/vite'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			// preserve: ['module']
		}),
		mdsvex(mdsvexConfig),
	],

	kit: {
		adapter: adapter(),
		prerender: {
			onError: 'continue'
		},
		vite: {
			plugins: [
				Icons({
					compiler: 'svelte',
				}),
			],
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
