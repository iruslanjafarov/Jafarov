import Container from '../container/container';

/**
 * Separator
 *
 * This component renders a horizontal rule (`<hr>`) wrapped in a `Container` component.
 * It is used to visually separate sections of content by displaying a thin, gray horizontal line.
 * The line has a height of 1px and uses a light gray color for its background.
 *
 * The `Separator` component does not accept any props and is used for layout purposes only.
 *
 * @returns {JSX.Element} A JSX element representing a horizontal line wrapped inside a container.
 */

const Separator = (): JSX.Element => (
	<Container>
		<hr className='h-[1px] border-t-0 bg-gray-300' />
	</Container>
);

export default Separator;
