import { IProduct } from '@/entities/product/types/product.ts';
import { useState, useEffect, useCallback } from 'react';
import { useStore } from '@/app/providers/store';

const useProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const { type } = useStore();

	const fetchProducts = useCallback(async () => {
		try {
			setLoading(true);

			const request = await fetch(
				'https://sweet-berry-detective.glitch.me/products'
			);

			const data = await request.json();

			const filteredData =
				type === 'all'
					? data
					: data.filter((product: IProduct) => product.type === type);

			setProducts(filteredData || []);

			setLoading(false);
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'We have unknown error'
			);
		}
	}, [type]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return { products, loading };
};

export default useProducts;
