import { FC, Fragment } from 'react';
import useProducts from '../hooks/useProducts';
import Container from '@/shared/container/container';
import FadeView from '@/shared/fadeView/fadeView';

const Product: FC = () => {
	const { products } = useProducts();

	return (
		<Container>
			<div className='flex flex-wrap items-center justify-evenly'>
				{products.map(({ path, name, price }, idx) => (
					<Fragment key={idx}>
						<FadeView>
							<img
								src={path}
								className='w-full sm:w-[300px] md:w-[450px] h-auto mt-6 rounded-lg'
							/>
							<div className='mt-3'>
								<h2>{name}</h2>
								<h3 className='text-gray-400'>{price} ₽</h3>
							</div>
						</FadeView>
					</Fragment>
				))}
			</div>
		</Container>
	);
};

export default Product;
