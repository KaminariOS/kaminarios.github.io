import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from 'remark-math'
import rehypeExternalLinks from 'rehype-external-links';
import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';


export default {
	extensions: ['.md'],
	smartypants: {
		quotes: true,
		ellipses: true,
		dashes: 'oldschool',
	},
	remarkPlugins: [
		remarkMath,
	],
	rehypePlugins: [
		rehypeKatexSvelte,
		rehypeExternalLinks,
		rehypeSlug,
		[rehypeAutolinkHeadings, { // Adds hyperlinks to the headings, requires rehypeSlug
			behavior: 'wrap',
		}],
		toc,
	],
};