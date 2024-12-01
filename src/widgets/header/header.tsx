import { FC } from 'react';
import Logo from '/logo.svg';

const Header: FC = () => {
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
