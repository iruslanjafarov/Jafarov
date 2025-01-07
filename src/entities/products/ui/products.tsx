import { FC } from 'react';
import { useStore } from '@/app/providers/store';
import useProducts from '@/entities/products/hooks/useProducts.ts';
import Container from '@/shared/container/container.tsx';
import { AnimatePresence } from 'framer-motion';
import TransitionView from '@/shared/transitionView/transitionView.tsx';
import Spinner from '@/shared/spinner/spinner.tsx';
import { Link } from 'react-router';
import FadeView from '@/shared/fadeView/fadeView.tsx';
import Separator from '@/shared/separator/separator';
import Favorite from '@/features/favorite/ui/favorite';

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
					<Link key={id} to={`/detail/${id}`}>
						<FadeView className='mb-6'>
							<div className='flex flex-col'>
								<img
									src={path}
									alt={name}
									className='w-full sm:w-[300px] md:w-[450px] h-auto mt-6 rounded-lg'
									loading='lazy'
								/>
								<div className='mt-4 mb-2.5'>
									<Separator color={'bg-gray-200'} container={false} />
								</div>
								<div className='flex justify-between items-center'>
									<div className='flex flex-col'>
										<h2>{name}</h2>
										<h3 className='text-gray-400'>{price} ₽</h3>
									</div>
									<Favorite id={id} />
								</div>
							</div>
						</FadeView>
					</Link>
				))}
			</div>
		</Container>
	);
};

export default Products;
