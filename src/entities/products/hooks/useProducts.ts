import { useState, useEffect, useCallback } from 'react';
import { IProduct, IUseProducts } from '../model/types/products.ts';
import { useStore } from '@/app/providers/store.ts';

/**
 * useProducts Hook
 *
 * A custom React hook for fetching a list of products from a remote API.
 * Manages the state of the products and the loading status. Automatically fetches the products
 * when the hook is used in a component.
 *
 * @hook
 * @returns {IUseProducts} The hook's state and methods.
 * @property {IProduct[]} products - An array of products fetched from the API.
 * @property {boolean} loading - A boolean indicating whether the data is being loaded.
 *
 * @throws {Error} Throws an error if the fetch request fails.
 */

const useProducts = (): IUseProducts => {
	const { setProducts } = useStore();
	const [loading, setLoading] = useState<boolean>(false);

	/**
	 * Fetches a list of products from the API.
	 *
	 * This function retrieves product data and updates the state. If an error occurs, an error message is thrown.
	 *
	 * @async
	 */
	const fetchProducts = useCallback(async () => {
		try {
			setLoading(true);

			const request = await fetch(
				'https://sweet-berry-detective.glitch.me/products'
			);

			const data: IProduct[] = await request.json();

			setProducts(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			throw new Error(
				error instanceof Error ? error.message : 'An unknown error occurred.'
			);
		}
	}, [setProducts]);

	// Automatically fetch products when the hook is used.
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return { loading };
};

export default useProducts;
