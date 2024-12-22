import Product from '@/entities/products/ui/products';
import Footer from '@/widgets/footer/ui/footer';

/**
 * Home Component
 *
 * A functional React component that serves as the landing page of the application.
 * It renders the `Product` component to display a list of products or a featured product,
 * and includes the `Footer` component at the bottom of the page.
 * The `Product` component is responsible for fetching and displaying product information.
 * The `Footer` component typically includes additional information such as payment methods or copyright details.
 *
 * @component
 * @returns {JSX.Element} A JSX element representing the home page, with a product list or featured product and a footer.
 */

const Home = (): JSX.Element => {
	return (
		<>
			<Product />
			<Footer />
		</>
	);
};

export default Home;
