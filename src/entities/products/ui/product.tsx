import { IProduct } from '../model/types/products';
import { FC, useState } from 'react';
import { Link } from 'react-router';
import FadeView from '@/shared/fadeView/fadeView.tsx';
import { motion } from 'framer-motion';
import Favorite from '@/features/favorite/ui/favorite';
import Separator from '@/shared/separator/separator';

const Product: FC<IProduct> = ({ id, path, name, price }) => {
	const [onItemHover, setOnItemHover] = useState<boolean>(false);

	return (
		<Link key={id} to={`/detail/${id}`}>
			<FadeView className='mb-6'>
				<div className='flex flex-col'>
					<div
						className='relative'
						onMouseEnter={() => setOnItemHover((prevState) => !prevState)}
						onMouseLeave={() => setOnItemHover((prevState) => !prevState)}
					>
						<img
							src={path}
							alt={name}
							className='w-full sm:w-[300px] md:w-[450px] h-auto mt-6 rounded-lg'
							loading='lazy'
						/>
						{onItemHover && (
							<motion.div
								className='absolute top-8 right-2'
								initial={{ opacity: 0 }} // начальное состояние - скрыто
								animate={{ opacity: onItemHover ? 1 : 0 }} // плавное изменение opacity
								transition={{ duration: 0.3 }} // длительность анимации
							>
								<Favorite id={id} />
							</motion.div>
						)}
					</div>

					<div className='mt-4 mb-2.5'>
						<Separator color={'bg-gray-200'} container={false} />
					</div>
					<div className='flex justify-between items-center'>
						<h2>{name}</h2>
						<h3 className='text-gray-400'>{price} ₽</h3>
					</div>
				</div>
			</FadeView>
		</Link>
	);
};

export default Product;
