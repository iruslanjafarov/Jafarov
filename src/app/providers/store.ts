import { IProduct } from '@/entities/products/model/types/products';
import { create } from 'zustand';

interface IStore {
	products: IProduct[];
	product: IProduct;
	setProducts: (products: IProduct[]) => void;
	setProduct: (product: IProduct) => void;
}

export const useStore = create<IStore>((set) => ({
	products: [],
	product: { id: 0, path: '', name: '', price: 0, type: '' },
	setProducts: (products) => set({ products: products }),
	setProduct: (product) => set({ product }),
}));
