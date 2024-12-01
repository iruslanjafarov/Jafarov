import { lazy } from 'react';

const Detail = lazy(() => import('./detail'));

export const detailRoute = [
	{
		path: '/detail',
		element: Detail,
	},
];
