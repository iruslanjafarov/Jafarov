import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';

/**
 * Favorite component for toggling the favorite state of a product.
 *
 * This component allows users to mark a product as a favorite by clicking the heart icon.
 * The favorite state is persisted in localStorage using the product ID as a key.
 *
 * @param {Object} props - The component props.
 * @param {number} [props.id] - The unique identifier of the product. Optional.
 * @returns {JSX.Element} The rendered Favorite component.
 */

const DetailFavorite = ({ id }: { id?: number }): JSX.Element => {
	const [isActive, setIsActive] = useState<boolean>(
		localStorage.getItem(`product/${id}/favorite`) === 'true'
	);

	/**
	 * Handles toggling the favorite state when the div icon is clicked.
	 *
	 * @param {React.MouseEvent<HTMLDivElement>} event - The mouse event triggered by clicking the div.
	 */

	const handleIsActive = (event: React.MouseEvent<HTMLDivElement>) => {
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
			className='rounded-md cursor-pointer'
			animate={{
				borderColor: isActive ? '#F44336' : '#000',
				color: isActive ? '#F44336' : '#000',
			}}
			transition={{ duration: 0.3 }}
			style={{
				borderWidth: 1,
				borderStyle: 'solid',
			}}
			onClick={handleIsActive}
		>
			<div className='p-2.5'>
				<HeartIcon className='w-[24px] h-[24px] stroke-1' />
			</div>
		</motion.div>
	);
};

export default DetailFavorite;
