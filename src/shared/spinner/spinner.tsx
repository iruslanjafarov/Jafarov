import { FC } from 'react';

/**
 * Spinner
 *
 * This is a simple spinner component used to indicate loading or processing states.
 * It renders a circular spinner with a rotating animation to provide visual feedback 
 * while content is loading. The spinner has a fixed size of 64px (16x16), with a black top
 * and right border, creating the effect of a spinning circle.
 * 
 * The spinner uses Tailwind CSS classes for styling and animation.
 *
 * @returns {JSX.Element} A JSX element representing a circular spinner.
 */

const Spinner: FC = (): JSX.Element => {
	return (
		<div className='w-16 h-16 border-4 border-t-black border-r-black rounded-full animate-spin'></div>
	);
};

export default Spinner;
