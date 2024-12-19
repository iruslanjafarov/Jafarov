import { FC } from 'react';

interface ILogo {
	src: string;
	alt: string;
	className?: string;
}

const Logo: FC<ILogo> = ({ src, alt, className = '' }): JSX.Element => {
	return (
		<div
			className={`bg-white p-2 flex items-center justify-center rounded-lg ${className}`}
		>
			<img src={src} alt={alt} className='w-[40px]' />
		</div>
	);
};

export default Logo;
