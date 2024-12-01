import { FC } from 'react';
import Logo from '/logo.svg';

/**
 * Header
 *
 * This component represents the header section of the page, containing the navigation bar.
 * The header includes the website logo and is styled to be responsive with a maximum width of 1000px.
 * The logo is displayed on the left side of the navigation bar, and the content is centered within the viewport.
 * 
 * The component does not currently include a navigation menu, but it has a placeholder for a future menu 
 * where buttons could toggle between different types or categories (e.g., "Все" and "Чёрные").
 *
 * @returns {JSX.Element} A JSX element that represents the header with a navigation bar and logo.
 */

const Header: FC = (): JSX.Element => {
	return (
		<header>
			<nav className='max-w-[1000px] w-full mx-auto px-4 py-3 flex justify-between items-center'>
				<img src={Logo} alt='logo' className='w-[70px] h-[70px]' />
				{/*<ul className='flex gap-16'>
					<li>
						<Button
							onClick={() => setType('all')}
							className={`${type === 'all' ? 'underline' : ''}`}
						>
							Все
						</Button>
					</li>
					<li>
						<Button
							onClick={() => setType('black')}
							className={`${type === 'black' ? 'underline' : ''}`}
						>
							Чёрные
						</Button>
					</li>
				</ul>*/}
			</nav>
		</header>
	);
};

export default Header;
