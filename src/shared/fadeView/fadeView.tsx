import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IFadeView {
	children?: ReactNode;
	className?: string;
}

const FadeView: FC<IFadeView> = ({ children, className }) => {
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
