import { FC } from 'react';
import Spinner from '@/shared/spinner/spinner';
import TransitionView from '@/shared/transitionView/transitionView';
import useProducts from '@/entities/product/hooks/useProducts.ts';
import Container from '@/shared/container/container.tsx';
import FadeView from '@/shared/fadeView/fadeView.tsx';
import { AnimatePresence } from 'framer-motion';

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

const Product: FC = (): JSX.Element => {
	const { products, loading } = useProducts();

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
				{products.map(({ path, name, price }, idx) => (
					<FadeView key={idx} className='mb-6'>
						<img
							src={path}
							alt={name}
							className='w-full sm:w-[300px] md:w-[450px] h-auto mt-6 rounded-lg'
							loading='lazy'
						/>
						<div className='mt-3'>
							<h2>{name}</h2>
							<h3 className='text-gray-400'>{price} ₽</h3>
						</div>
					</FadeView>
				))}
			</div>
		</Container>
	);
};

export default Product;
