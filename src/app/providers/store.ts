import { create } from 'zustand';

interface IStore {
	type: 'all' | 'black';
	setType: (type: 'all' | 'black') => void;
	initializeType: () => void;
}

export const useStore = create<IStore>((set) => {
	return {
		type: 'all',
		setType: (type) => {
			set({ type });

			localStorage.setItem('type', type);
		},

		initializeType: () => {
			const type = localStorage.getItem('type') as 'all' | 'black' | null;

			if (type) {
				set({ type });
			}
		},
	};
});
