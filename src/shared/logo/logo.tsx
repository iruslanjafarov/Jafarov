import { FC } from 'react';

/**
 * Logo Component
 *
 * A functional React component that displays an image logo. The logo is wrapped in a `div` with background and padding for styling.
 * Optionally, additional CSS classes can be passed through the `className` prop to customize the appearance of the container.
 * The logo image is responsive, and the size is fixed at 32px width.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.src - The source URL of the logo image.
 * @param {string} props.alt - The alt text for the logo image.
 * @param {string} [props.className=''] - Optional additional CSS class to style the container.
 * @returns {JSX.Element} A JSX element representing the logo wrapped in a styled container.
 */

interface ILogo {
	src: string;
	alt: string;
	className?: string;
}

const Logo: FC<ILogo> = ({ src, alt, className = '' }): JSX.Element => {
	return (
		<div
			className={`bg-white p-2 flex items-center justify-center rounded ${className}`}
		>
			<img src={src} alt={alt} className='w-[32px]' />
		</div>
	);
};

export default Logo;
