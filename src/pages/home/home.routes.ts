import { lazy } from 'react';

const Home = lazy(() => import('./home'));

/**
 * homeRoute
 *
 * Defines the route configuration for the Home page of the application.
 * The component is dynamically imported using React's `lazy` for code splitting,
 * ensuring the Home page is only loaded when needed.
 *
 * @constant
 * @type {Array<{ path: string, element: React.LazyExoticComponent<React.ComponentType<unknown>> }>}
 * @property {string} path - The URL path for the route.
 * @property {React.LazyExoticComponent<React.ComponentType<unknown>>} element - The dynamically imported React component.
 */

export const homeRoute: Array<{
	path: string;
	element: React.LazyExoticComponent<React.ComponentType<unknown>>;
}> = [
	{
		path: '/',
		element: Home,
	},
];
