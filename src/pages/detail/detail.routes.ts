import { lazy } from 'react';

const Detail = lazy(() => import('./detail'));

/**
 * detailRoute
 *
 * Defines the route configuration for the Detail page of the application.
 * This route is used to display detailed information for a specific item, identified by the `id` parameter in the URL.
 * The component is dynamically imported using React's `lazy` for optimized code splitting.
 *
 * @constant
 * @type {Array<{ path: string, element: React.LazyExoticComponent<React.ComponentType<unknown>> }>}
 * @property {string} path - The URL path for the route, including a dynamic `:id` segment.
 * @property {React.LazyExoticComponent<React.ComponentType<unknown>>} element - The dynamically imported React component.
 */

export const detailRoute: Array<{ path: string; element: React.LazyExoticComponent<React.ComponentType<unknown>>; }> = [
	{
		path: '/detail/:id',
		element: Detail,
	},
];
