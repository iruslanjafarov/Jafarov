import { FC } from 'react';

interface IButton {
	children: string;
	className?: string;
	onClick?: () => void;
}

/**
 * Button
 *
 * This is a simple button component that renders a button element with customizable text, styling, and click behavior.
 * The `children` prop is used to define the text displayed on the button. 
 * The `className` prop allows passing custom CSS classes for styling, and the `onClick` prop 
 * provides a function to be executed when the button is clicked.
 *
 * @param {IButton} props - The component's props.
 * @param {string} props.children - The text content to be displayed inside the button.
 * @param {string} [props.className] - Optional custom CSS classes to style the button.
 * @param {() => void} [props.onClick] - Optional function to be executed when the button is clicked.
 * 
 * @returns {JSX.Element} A JSX button element that can be styled and interacted with.
 */

const Button: FC<IButton> = ({ children, className = '', onClick }: IButton): JSX.Element => (
	<button className={`${className}`} onClick={onClick}>
		{children}
	</button>
);

export default Button;
