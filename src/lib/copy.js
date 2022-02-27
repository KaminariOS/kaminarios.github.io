// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
function addCopyHandler(el){
	  function doCopy(event) {
		navigator.clipboard.writeText(el.innerText);
		showMsgNearCursor(event, el);
	}
	el.addEventListener('click', doCopy);
}

export default function findPre() {
	const codeBlocks = document.getElementsByTagName('pre');
	for (const codeBlock of codeBlocks){
		let lang = Array.from(codeBlock.classList.values()).filter(e => e.startsWith('language-'));
		if (lang.length === 0) {continue;}
		lang = lang[0].split('-')[1];
		lang = lang.slice(0, 1).toUpperCase() + lang.slice(1);
		codeBlock.title = `Click to copy ${lang} code`;
		addCopyHandler(codeBlock);
	}
}

function showMsgNearCursor(event, parent){
	let x = event.pageX;
	let y = event.pageY;
	let el = document.createElement('div');
	el.innerText = 'Copied!';
	let style = el.style;
	style.position = 'absolute';
	style.left = `${x}px`;
	style.top = `${y}px`;
	style.background = 'rgba(20, 39, 175, 0.65)';
	style.color = 'aliceblue';
	style.padding = '6px';
	style.borderRadius = "6px";
	setTimeout(() => el.remove(), 500);
	parent.appendChild(el);
}

