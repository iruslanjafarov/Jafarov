import { FC } from 'react';
import Container from '@/shared/container/container';
import Logo from '/logo.svg';
import { Link } from 'react-router';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

/**
 * Header
 *
 * This component represents the header section of the page, which includes a navigation bar and the website logo.
 * The header is designed to be fixed below the marquee component, remaining visible while scrolling.
 * It is styled with a semi-transparent background, a subtle bottom border, and centered navigation elements.
 *
 * @returns {JSX.Element} A JSX element that renders the header with a navigation bar and logo.
 */

const Header: FC = (): JSX.Element => {
	return (
		<header className='sticky top-[48px] w-full z-50 backdrop-blur-md border-b-[1px] border-gray-300'>
			<Container>
				<nav className='flex justify-between items-center px-4 py-3'>
					<Link to={'/'}>
						<img src={Logo} alt='logo' className='w-[52px] h-[52px]' />
					</Link>
					<Link to={'/cart'}>
						<ShoppingBagIcon className='w-[24px] h-[24px]' />
					</Link>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
