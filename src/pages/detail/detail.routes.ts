import { lazy } from 'react';

const Detail = lazy(() => import('./detail'));

export const detailRoute = [
	{
		path: '/detail/:id',
		element: Detail,
	},
];
