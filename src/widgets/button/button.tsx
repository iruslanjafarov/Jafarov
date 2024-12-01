import { FC } from 'react';

interface IButton {
	children: string;
	className?: string;
	onClick?: () => void;
}

const Button: FC<IButton> = ({ children, className = '', onClick }) => (
	<button className={`${className}`} onClick={onClick}>
		{children}
	</button>
);

export default Button;
