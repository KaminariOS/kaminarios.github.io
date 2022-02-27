import { writable } from 'svelte/store';
import {browser} from '$app/env';

const ls = browser? localStorage: {getItem: () => undefined, setItem: () => undefined};
const effect_key = 'v_effects';
export const enable_effects = writable((ls.getItem(effect_key) || 'true') === 'true');

enable_effects.subscribe(val => ls.setItem(effect_key, val.toString()));

export const menuMode = writable(false);

const theme_key = 'theme';
const themeDefault = false;
export const lightTheme = writable(browser? detectColorScheme(): themeDefault);
function detectColorScheme(){
	let theme = localStorage.getItem(theme_key);
	let notDefault = themeDefault? 'dark': 'light';
	//local storage is used to override OS theme settings
	if(theme){
		return theme === 'true';
	}
	else if(window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${notDefault})`).matches) {
		//OS theme setting detected as dark
		return !themeDefault;
		}
		//matchMedia method not supported
	return themeDefault;
	//dark theme preferred, set document with a `data-theme` attribute
}
lightTheme.subscribe(val => {
	ls.setItem(theme_key, val.toString());
	if (browser){
		document.documentElement.setAttribute("data-theme", val? "light":"dark");
	}
});
