import { create } from 'zustand';

interface IStore {
	theme: 'light' | 'dark';
	setTheme: () => void;
}

export const useStore = create<IStore>((set) => {
	const prefersLight = window.matchMedia(
		'(prefers-color-scheme: light)'
	).matches;

	return {
		theme: prefersLight ? 'light' : 'dark',
		setTheme: () =>
			set((state) => ({
				theme: state.theme === 'light' ? 'dark' : 'light',
			})),
	};
});
