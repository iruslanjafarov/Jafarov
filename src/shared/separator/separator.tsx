import { FC } from 'react';
import Container from '../container/container';

interface ISeparator {
	color?: string;
	container?: boolean;
}

/**
 * Separator Component
 *
 * A functional React component that renders a horizontal rule (`<hr>`) with optional wrapping inside a `Container` component.
 * Used to visually separate sections of content with a customizable horizontal line.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} [props.color='bg-gray-300'] - The CSS class for the line's background color.
 * @param {boolean} [props.container=true] - Determines whether the `<hr>` is wrapped inside a `Container` component.
 * @returns {JSX.Element} A horizontal line, optionally wrapped inside a container.
 */

const Separator: FC<ISeparator> = ({
	color = 'bg-gray-300',
	container = true,
}: { color?: string; container?: boolean; }): JSX.Element => {
	if (!container) {
		return <hr className={`h-[1px] border-t-0 ${color}`} />;
	}

	return (
		<Container>
			<hr className={`h-[1px] border-t-0 ${color}`} />
		</Container>
	);
};

export default Separator;
