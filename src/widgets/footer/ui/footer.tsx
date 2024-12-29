import { useStore } from '@/app/providers/store';
import Container from '@/shared/container/container';
import Logo from '@/shared/logo/logo';

import AppleLogo from '../assets/apple.svg';
import GooglePay from '../assets/google.svg';
import Mir from '../assets/mir.svg';
import Visa from '../assets/visa.svg';
import MasterCard from '../assets/mastercard.svg';

/**
 * Footer Component
 *
 * A functional React component that renders the footer section of the application.
 * Displays supported payment methods and a copyright notice.
 *
 * @component
 * @returns {JSX.Element} The footer section containing payment method logos and a copyright notice.
 */

const Footer = (): JSX.Element | null => {
	const { products } = useStore();

	if (!products.length) {
		return null;
	}

	/**
	 * Interface for logo details.
	 *
	 * @property {string} src - The source path of the logo image.
	 * @property {string} alt - The alternative text for the logo image.
	 * @property {string} [className] - Optional CSS class for additional styling.
	 */
	interface ILogos {
		src: string;
		alt: string;
		className?: string;
	}

	/**
	 * List of payment method logos with their source and alt text.
	 *
	 * @type {ILogos[]}
	 */
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
				<div className='h-[200px] flex flex-col justify-between bg-black text-white mx-3 my-6 p-6 rounded-lg'>
					<div className='items-center'>
						<div className='text-zinc-500 font-bold uppercase'>
							Payment methods
						</div>
						<div className='flex gap-3 mt-3 h-[30px]'>
							{Logos.map(({ src, alt }, idx) => (
								<Logo src={src} alt={alt} key={idx} />
							))}
						</div>
					</div>
					<div className='flex flex-col gap-3'>
						<hr className='h-[1px] border-t-0 bg-gray-300/25' />
						<h2 className='text-zinc-600 font-bold uppercase tracking-tight text-sm'>
							{`© ${new Date().getFullYear()} Ruslan Jafarov`}
						</h2>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
