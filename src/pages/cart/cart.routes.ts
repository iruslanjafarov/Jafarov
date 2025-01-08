import { lazy } from 'react';

const Cart = lazy(() => import('./cart'));

/**
 * cartRoute
 *
 * Defines the route configuration for the Cart page of the application.
 * The component is dynamically imported using React's `lazy` for code splitting,
 * ensuring the Cart page is only loaded when needed.
 *
 * @constant
 * @type {Array<{ path: string, element: React.LazyExoticComponent<React.ComponentType<unknown>> }>}
 * @property {string} path - The URL path for the route.
 * @property {React.LazyExoticComponent<React.ComponentType<unknown>>} element - The dynamically imported React component.
 */

export const cartRoute: Array<{
	path: string;
	element: React.LazyExoticComponent<React.ComponentType<unknown>>;
}> = [
	{
		path: '/cart',
		element: Cart,
	},
];
