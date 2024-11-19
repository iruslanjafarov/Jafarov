import { IProduct } from '@/entities/product/types/product.ts';
import { useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		const request = await fetch('/db.json');

		if (!request.ok) {
			throw new Error(`Have problem with fetch, status: ${request.statusText}`);
		}

		const data = await request.json();

		setProducts(data || []);
	};

	return { products };
};

export default useProducts;
