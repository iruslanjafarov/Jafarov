import Container from '@/shared/container/container';
import Logo from '@/shared/logo/logo';

import AppleLogo from '../assets/apple.svg';
import GooglePay from '../assets/google.svg';
import Mir from '../assets/mir.svg';
import Visa from '../assets/visa.svg';
import MasterCard from '../assets/mastercard.svg';

const Footer = () => {
	interface ILogos {
		src: string;
		alt: string;
		className?: string;
	}

	const Logos: ILogos[] = [
		{ src: AppleLogo, alt: 'ApplePay' },
		{ src: GooglePay, alt: 'GooglePay' },
		{ src: Mir, alt: 'Mir' },
		{ src: Visa, alt: 'Visa' },
		{ src: MasterCard, alt: 'MasterCard' },
	];

	return (
		<footer>
			<Container>
				<div className='h-[200px] flex bg-black text-white mx-3 my-6 p-6 rounded-lg'>
					<div className='text-zinc-500 font-bold uppercase'>
						Payment methods
					</div>
					{Logos.map(({ src, alt }) => (
						<Logo src={src} alt={alt} />
					))}
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
