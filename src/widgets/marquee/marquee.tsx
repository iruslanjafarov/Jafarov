import { FC, PropsWithChildren } from 'react';
import MarqueeComponent from 'react-fast-marquee';

const Marquee: FC<PropsWithChildren> = ({ children }) => {
	return (
		<MarqueeComponent autoFill pauseOnHover className='bg-black !text-white p-3 !sticky !top-0 !z-50'>
			{children}
		</MarqueeComponent>
	);
};

export default Marquee;
