import katex from 'katex';

function replaceBetween(str, start, end, what) {
	return str.substring(0, start) + what + str.substring(end);
};

const options = {
	displayMode: false,
	throwOnError: false
};

let regexp = /\\\[(.*)\\\]|\\\$(.*)\\\$|\\\((.*)\\\)/gm
export function process(asciidoc_html) {
	return asciidoc_html.replaceAll(regexp, function(match) {
		return katex.renderToString(match.slice(2, -2), options);
	})
}


let inline_regex = /latexmath:\[(.*)]/gm;
let block_regex = /^\[latexmath][\s\n]*\+{4}[\s\n]*(.*)[\s\n]*\+{4}/gms;
let block_pass = '++++\n';
let inline_pass = '+++';
export function preprocess(asciidoc){
	let block = asciidoc.replaceAll(block_regex, function(p1, p2){
		return block_pass + katex.renderToString(p2) + '\n++++';
	});
	let inline = block.replaceAll(inline_regex, function(p1, p2){
		return inline_pass + katex.renderToString(p2) + inline_pass;
	});
	return inline;
}
// let c = String.raw`latexmath:[C = \alpha + \beta Y^{\gamma} + \epsilon]`;