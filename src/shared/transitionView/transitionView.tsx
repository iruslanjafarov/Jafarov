import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const TransitionView: FC<PropsWithChildren> = ({ children }) => {
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
