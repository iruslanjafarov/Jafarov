import { useState, useEffect, useCallback } from 'react';
import { IProduct, IUseProduct } from '../model/types/product.ts';
import { useParams } from 'react-router';

/**
 * useProduct
 *
 * This hook fetches a product from a remote API and manages the state of the product and loading status.
 * It initiates a request to retrieve a product from the API when the component is mounted, and stores the resulting data
 * in the `product` state. The `loading` state tracks the loading status during the request.
 *
 * @returns {Object} The hook's state.
 * @returns {IProduct | undefined} state.product - A product fetched from the API or undefined if still loading.
 * @returns {boolean} state.loading - A boolean indicating whether the request is in progress or not.
 */
const useProduct = (): IUseProduct => {
	const { id } = useParams();

	const [product, setProduct] = useState<IProduct | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(false);

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
	}, [id]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return { product, loading };
};

export default useProduct;
