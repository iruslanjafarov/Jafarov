import { IProduct } from '@/entities/product/types/product.ts';
import { useState, useEffect, useCallback } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchProducts = useCallback(async () => {
		try {
			setLoading(true);

			const request = await fetch(
				'https://sweet-berry-detective.glitch.me/products'
			);

			const data = await request.json();

			setProducts(data || []);

			setLoading(false);
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'We have unknown error'
			);
		}
	}, []);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return { products, loading };
};

export default useProducts;
