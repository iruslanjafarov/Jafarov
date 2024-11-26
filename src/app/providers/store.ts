import { create } from 'zustand';

interface IStore {
	type: 'all' | 'black';
	setType: (type: 'all' | 'black') => void;
}

export const useStore = create<IStore>((set) => {
	return {
		type: 'all',
		setType: (type) => {
			set(() => ({
				type: type,
			}));
		},
	};
});
