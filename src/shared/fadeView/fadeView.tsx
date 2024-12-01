import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IFadeView {
	children?: ReactNode;
	className?: string;
}

/**
 * FadeView
 *
 * This is a functional component that animates its children with a fade-in and slide-up effect using Framer Motion.
 * When the component comes into view, it animates from an initial opacity of 0 and a vertical offset of 80px,
 * gradually fading in and sliding up to its original position. The transition lasts for 0.7 seconds.
 * 
 * The `children` prop allows you to pass any content that will be animated.
 * The `className` prop allows you to apply custom CSS classes to the container element.
 *
 * @param {IFadeView} props - The component's props.
 * @param {ReactNode} props.children - The content that will be animated inside the component.
 * @param {string} [props.className] - Optional custom CSS classes for the container element.
 * 
 * @returns {JSX.Element} A JSX element that wraps the children and applies the fade-in animation.
 */

const FadeView: FC<IFadeView> = ({ children, className }: IFadeView): JSX.Element => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default FadeView;
