import Header from '@/widgets/header/header';
import Separator from '@/shared/separator/separator';
import Product from '@/entities/product/ui/product';
import Marquee from '@/widgets/marquee/marquee';

/**
 * Main
 *
 * This is the main component that serves as the primary layout for the page.
 * It renders several child components:
 * - `Marquee` that displays a scrolling text with the name "Ruslan Jafarov".
 * - `Header` for the top section of the page.
 * - `Separator` to add a separator line or space.
 * - `Product` to display a list of products.
 *
 * This component does not receive any props and is responsible for composing the page layout.
 *
 * @returns {JSX.Element} A JSX element that represents the entire layout of the main page.
 */

const Main = (): JSX.Element => {
	return (
		<>
			<Marquee
				children={<div className='cursor-default mx-3'>Ruslan Jafarov</div>}
			/>
			<Header />
			<Separator />
			<Product />
		</>
	);
};

export default Main;
