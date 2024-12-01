import { FC, PropsWithChildren } from 'react';
import MarqueeComponent from 'react-fast-marquee';

/**
 * Marquee
 *
 * This component wraps the `react-fast-marquee` library to create a scrolling text or content effect.
 * The text or content will scroll horizontally across the screen, with the option to pause the scrolling
 * when the mouse hovers over it. The component is styled with a black background and white text, ensuring 
 * visibility and high contrast. It is sticky at the top of the page (`top-0`), ensuring that the marquee remains 
 * at the top of the viewport when scrolling.
 *
 * The `children` prop allows any content (e.g., text, images) to be passed in and scrolled inside the marquee.
 *
 * @param {PropsWithChildren} props - The component's props.
 * @param {ReactNode} props.children - The content that will scroll inside the marquee.
 * 
 * @returns {JSX.Element} A JSX element that displays scrolling content.
 */

const Marquee: FC<PropsWithChildren> = ({ children }: PropsWithChildren): JSX.Element => {
	return (
		<MarqueeComponent
			autoFill
			pauseOnHover
			className='bg-black !text-white p-3 !sticky !top-0 !z-50'
		>
			{children}
		</MarqueeComponent>
	);
};

export default Marquee;
