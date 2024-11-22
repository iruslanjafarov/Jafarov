import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
	return <div className='max-w-[1000px] w-full mx-auto px-6'>{children}</div>;
};

export default Container;
