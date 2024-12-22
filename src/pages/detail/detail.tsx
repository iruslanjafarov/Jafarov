import Product from '@/entities/product/ui/product';

/**
 * Detail Component
 *
 * This is a functional React component that renders the `Product` component.
 * It is used to display detailed information about a product, typically by passing the product ID
 * through the route. The component is part of a dynamic route configuration (e.g., `/detail/:id`).
 *
 * @component
 * @returns {JSX.Element} A JSX element representing the detailed view of a product.
 */

const Detail = (): JSX.Element => {
	return <Product />;
};

export default Detail;
