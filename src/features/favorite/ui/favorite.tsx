import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';

const Favorite = ({ id }: { id: number }) => {
	const [isActive, setIsActive] = useState<boolean>(
		localStorage.getItem(`product/${id}/favorite`) === 'true'
	);

	const handleIsActive = (event: React.MouseEvent<SVGSVGElement>) => {
		event.preventDefault();
		event.stopPropagation();

		setIsActive((isActivePrevState) => {
			localStorage.setItem(
				`product/${id}/favorite`,
				JSON.stringify(!isActivePrevState)
			);

			return !isActivePrevState;
		});
	};

	return (
		<motion.div
			whileTap={{ scale: 0.8 }}
			animate={{ color: isActive ? '#F44336' : '#000' }}
			transition={{ duration: 0.3 }}
		>
			<HeartIcon
				onClick={handleIsActive}
				className='w-[32px] h-[32px] cursor-pointer'
			/>
		</motion.div>
	);
};

export default Favorite;
