import { FC } from 'react';
import { useStore } from '@/app/providers/store';
import useProducts from '@/entities/products/hooks/useProducts.ts';
import Container from '@/shared/container/container.tsx';
import { AnimatePresence } from 'framer-motion';
import TransitionView from '@/shared/transitionView/transitionView.tsx';
import Spinner from '@/shared/spinner/spinner.tsx';
import Product from './product';

/**
 * Product
 *
 * This is a functional React component that displays a list of products, loading status, and product details.
 * It uses the `useProducts` hook to fetch the list of products from an API and manages the loading state.
 * While the products are being fetched, a loading spinner is shown. Once the products are loaded,
 * each product's image, name, and price are displayed in a grid layout.
 *
 * @component
 * @returns {JSX.Element} A JSX element representing the product list and loading spinner.
 */

const Products: FC = (): JSX.Element => {
	const { products } = useStore();
	const { loading } = useProducts();

	return (
		<Container>
			<AnimatePresence>
				{loading && (
					<div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
						<TransitionView>
							<Spinner />
						</TransitionView>
					</div>
				)}
			</AnimatePresence>

			<div className='flex flex-wrap items-center justify-evenly'>
				{products.map(({ id, path, name, price }) => (
					<Product id={id} path={path} name={name} price={price} />
				))}
			</div>
		</Container>
	);
};

export default Products;
