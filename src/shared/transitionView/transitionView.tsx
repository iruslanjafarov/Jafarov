import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

/**
 * TransitionView
 *
 * This component provides a smooth transition animation for its child elements 
 * using **Framer Motion**. The animation includes an initial state with reduced opacity 
 * and a slight scale-down, followed by an animation to full opacity and normal scale. 
 * When exiting, the component scales down and fades out. 
 * This is useful for animating content when it enters or leaves the DOM.
 * 
 * The transition has a duration of 0.5 seconds with an `easeOut` easing function, 
 * ensuring a smooth and natural effect.
 *
 * @param {PropsWithChildren} props - The component's props.
 * @param {ReactNode} props.children - The content to be animated within the component.
 * 
 * @returns {JSX.Element} A JSX element that animates its children with a fade and scale transition.
 */

const TransitionView: FC<PropsWithChildren> = ({ children }: PropsWithChildren): JSX.Element => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	);
};

export default TransitionView;
