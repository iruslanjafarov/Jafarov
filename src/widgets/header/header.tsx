import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/shared/container/container';
import Logo from '/logo.svg';
import { Link } from 'react-router';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';

/**
 * Header
 *
 * This component represents the header section of the page, containing the navigation bar.
 * The header includes the website logo and is styled to be responsive with a maximum width of 1000px.
 * The logo is displayed on the left side of the navigation bar, and the content is centered within the viewport.
 *
 *
 * @returns {JSX.Element} A JSX element that represents the header with a navigation bar and logo.
 */

const Header: FC = (): JSX.Element => {
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > lastScrollY) {
			setShowHeader(false);
		} else {
			setShowHeader(true);
		}

		setLastScrollY(currentScrollY);
	};

	useEffect(() => {
		const onScroll = () => {
			requestAnimationFrame(handleScroll);
		};

		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	return (
		<>
			<div className='h-[94px]' aria-hidden='true'></div>
			<motion.header
				initial={{ y: 0 }}
				animate={{ y: showHeader ? 0 : '-100%' }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 20,
				}}
				className='fixed top-[48px] left-0 w-full z-40 backdrop-blur-md border-b-[1px] border-gray-300'
			>
				<Container>
					<nav className='flex justify-between items-center px-4 py-3'>
						<Link to={'/'}>
							<img src={Logo} alt='logo' className='w-[70px] h-[70px]' />
						</Link>
						<Link to={'/cart'}>
							<ShoppingCartIcon className='w-[36px] h-[36px]' />
						</Link>
					</nav>
				</Container>
			</motion.header>
		</>
	);
};

export default Header;
