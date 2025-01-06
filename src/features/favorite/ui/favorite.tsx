import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';

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

const Favorite = ({ id }: { id?: number }): JSX.Element => {
	const [isActive, setIsActive] = useState<boolean>(
		localStorage.getItem(`product/${id}/favorite`) === 'true'
	);

	/**
	 * Handles toggling the favorite state when the icon is clicked.
	 *
	 * @param {React.MouseEvent<SVGSVGElement>} event - The mouse event triggered by clicking the icon.
	 */

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
