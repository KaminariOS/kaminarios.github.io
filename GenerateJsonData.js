// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
import fs from 'fs';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const post_dir = 'src/routes/posts';



// Use JSON file for storage
const file = join(path.join(__dirname, post_dir), 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

// If file.json doesn't exist, db.data will be null
// Set default data
// db.data = db.data || { posts: [] } // Node < v15.x
db.data ||= { posts: {}};             // Node >= 15.x

let posts = db.data.posts;

// Create and query items using plain JS
// db.data.posts.push('hello world')
// file name should be the same as slug
fs.readdirSync(path.join(__dirname, post_dir))
	.filter(e => e.endsWith('.md') || e.endsWith('.svx'))
	.map(fullname => {
		let stat = fs.statSync(path.join(__dirname, post_dir, fullname));
		return ({slug: path.parse(fullname).name, mtime: stat.mtime, birthtime: stat.birthtime})
	})
	.forEach(e => {
		if (e.slug in posts){
			posts[e.slug].mtime = e.mtime;
		} else {
			posts[e.slug] = e;
		}
	});
// const firstPost = db.data.posts[0]

// Alternatively, you can also use this syntax if you prefer
// const { posts } = db.data
// posts.push('hello world')

// Finally write db.data content to file
await db.write()

console.log("---Posts data updated.");