import { useState, useEffect, useCallback } from 'react';
import { IProduct, IUseProduct } from '../model/types/product.ts';
import { useParams } from 'react-router';
import { useStore } from '@/app/providers/store.ts';

/**
 * useProduct Hook
 *
 * A custom React hook for fetching product data from a remote API.
 * It manages the product data and loading state, fetching the product based on the `id` from the URL parameters.
 *
 * @hook
 * @returns {IUseProduct} Hook's state and methods.
 * @property {IProduct | undefined} product - The product data fetched from the API, or `undefined` if not yet available.
 * @property {boolean} loading - Indicates whether the data is being loaded.
 *
 * @throws {Error} Throws an error if the fetch request fails.
 */

const useProduct = (): IUseProduct => {
	const { setProduct } = useStore();
	const { id } = useParams();

	const [loading, setLoading] = useState<boolean>(false);

	/**
	 * Fetches product data from the API.
	 *
	 * This function fetches the product based on the provided `id` and updates the state accordingly.
	 * If an error occurs, it sets `loading` to false and throws an error with a descriptive message.
	 *
	 * @async
	 */

	const fetchProducts = useCallback(async () => {
		try {
			setLoading(true);

			const request = await fetch(
				`https://sweet-berry-detective.glitch.me/products/${id}`
			);

			const data: IProduct = await request.json();

			setProduct(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);

			throw new Error(
				error instanceof Error ? error.message : 'Unknown error occurred'
			);
		}
	}, [id, setProduct]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return { loading };
};

export default useProduct;
