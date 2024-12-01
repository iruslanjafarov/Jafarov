import { lazy } from 'react';

const Home = lazy(() => import('./home'));

export const homeRoute = [
	{
		path: '/',
		element: Home,
	},
];
