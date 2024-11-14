import {
	scopedPreflightStyles,
	isolateInsideOfContainer,
} from 'tailwindcss-scoped-preflight';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html'],
	theme: {
		extend: {},
	},
	plugins: [
		scopedPreflightStyles({
			isolationStrategy: isolateInsideOfContainer(['.tw', '#tw-id']), //if you need tailwind, use "tw" at the beginning of the class
		}),
	],
};
