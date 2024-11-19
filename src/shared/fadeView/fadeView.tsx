import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const FadeView: FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7 }}
		>
			{children}
		</motion.div>
	);
};

export default FadeView;
