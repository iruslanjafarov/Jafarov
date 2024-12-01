import { useState, useEffect, useCallback } from 'react';
import { IProduct, IUseProducts } from '../model/types/products.ts';

/**
 * useProducts
 *
 * This hook fetches a list of products from a remote API and manages the state of the products and loading status.
 * It initiates a request to retrieve products from the API when the component is mounted, and stores the resulting data
 * in the `products` state. The `loading` state tracks the loading status during the request.
 *
 * @returns {Object} The hook's state.
 * @returns {IProduct[]} state.products - An array of products fetched from the API.
 * @returns {boolean} state.loading - A boolean indicating whether the request is in progress or not.
 */

const useProducts = (): IUseProducts => {
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
