import { PropsWithChildren } from 'react';

/**
 * Container
 *
 * This component serves as a wrapper for the content and provides a consistent layout structure.
 * It applies a maximum width of 1000px, centers the content horizontally, and adds horizontal padding.
 * The `children` prop allows any child components or elements to be passed into the container.
 *
 * @param {PropsWithChildren} props - The component's props.
 * @param {ReactNode} props.children - The child elements or components that will be rendered inside the container.
 *
 * @returns {JSX.Element} A JSX element that wraps the children within a styled container.
 */

const Container = ({ children }: PropsWithChildren): JSX.Element => {
	return <div className='max-w-[1000px] w-full mx-auto px-6'>{children}</div>;
};

export default Container;
