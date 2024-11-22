import { FC } from 'react';
import Logo from '/logo.svg';

const Header: FC = () => {
	return (
    <header>
      <nav className='max-w-[1000px] w-full mx-auto px-4 py-3 flex'>
        <img src={Logo} alt='logo' className='w-[70px] h-[70px]'/>
      </nav>
		</header>
	);
};

export default Header;
