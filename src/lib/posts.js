import readingTime from 'reading-time';
import db from '../routes/posts/db.json';
import dayjs from 'dayjs';
import path from 'path';

const imports = import.meta.globEager('../routes/posts/*.md');
const posts = [];
export const md_components = [];

for (const relativePath in imports) {
	const post = imports[relativePath];
	if (post && !post.metadata.hidden) {
		let slug = path.parse(relativePath).name;
		md_components.push({slug, default: post.default});
		let db_post = db.posts[slug];
		posts.push({
			slug,
			...post.metadata,
			...post.default.render(),
	    // default: post.default,
			mtime: dayjs(db_post.mtime),
			birthtime: dayjs(db_post.birthtime),
			count: 0,
		});
	}
}


export let categories = new Map();
posts.forEach(post => {
	post.tags.forEach(tag =>{
		let category = categories.get(tag) || [];
		category.push(post);
		categories.set(tag, category);
	})
});


function getRelatedPosts(post){
	let related = new Set();
	post.tags.forEach(tag => categories.get(tag).forEach(rel => related.add(rel)));
	related.delete(post);
	return Array.from(related);
}
const posts_with_related = posts.map(post => ({...post, relatedPosts: getRelatedPosts(post), readingTime: '⏳' + readingTime(post.html).text}))
	.map(post => ({...post, count: post.relatedPosts.length}))
	.map(post => {
		post.relatedPosts = post.relatedPosts
			.sort((a, b) => b.count - a.count)
			.sort((a, b) => b.mtime.get('millisecond') - a.mtime.get('millisecond'))
			.slice(0, 3);
			return post;
	})
	.map(post => {
		let timeFormat ='YYYY-MM-DD';
		post.mtime = post.mtime.format(timeFormat);
		post.birthtime = post.birthtime.format(timeFormat);
		return post;
	});

function extractInfo(post){
	return {...post, html: null, relatedPosts: null}
}
const slugMap = new Map();
for (const post of posts_with_related){
	slugMap.set(post.slug, post)
}
for (const post of posts_with_related){
	const rels = [];
	post.relatedPosts.forEach(e => {
		const rel = slugMap.get(e.slug);
		const clone = extractInfo(rel);
		rels.push(clone);
	});
	post.relatedPosts = rels;
}

export const postInfo = posts.map(e => extractInfo(e));
export default posts_with_related;

