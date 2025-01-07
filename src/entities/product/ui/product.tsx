import { FC } from 'react';
import useProduct from '../hooks/useProduct.ts';
import { AnimatePresence } from 'framer-motion';
import TransitionView from '@/shared/transitionView/transitionView.tsx';
import Spinner from '@/shared/spinner/spinner.tsx';
import FadeView from '@/shared/fadeView/fadeView.tsx';
import { useStore } from '@/app/providers/store.ts';
import { useParams } from 'react-router';
import DetailFavorite from '@/features/detailFavorite/ui/detailFavorite.tsx';

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
	const { product } = useStore();
	const { loading } = useProduct();
	const { path, name, price } = product || {};

	const { id } = useParams();
	const conditionalId = id ? +id : undefined;

	return (
		<>
			<AnimatePresence>
				{loading && (
					<div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
						<TransitionView>
							<Spinner />
						</TransitionView>
					</div>
				)}
			</AnimatePresence>

			{product && !loading && (
				<div className='w-full h-full top-0 left-0 absolute flex justify-center items-center px-6'>
					<FadeView>
						<div className='relative'>
							<img
								src={path}
								alt={name}
								className='w-full lg:w-auto lg:max-w-full h-auto mt-6 rounded-lg'
							/>
						</div>
						<div className='flex justify-between mt-6'>
							<div className='flex flex-col'>
								<h2 className='text-xl truncate'>{name}</h2>
								<h3 className='text-xl text-gray-400 text-nowrap'>{price} ₽</h3>
							</div>
							<div className='w-fit'>
								<DetailFavorite id={conditionalId} />
							</div>
						</div>
					</FadeView>
				</div>
			)}
		</>
	);
};

export default Product;
