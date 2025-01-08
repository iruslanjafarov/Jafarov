import { homeRoute } from '@/pages/home/home.routes.ts';
import { detailRoute } from '@/pages/detail/detail.routes.ts';
import { cartRoute } from '@/pages/cart/cart.routes';

export const routes = [...homeRoute, ...detailRoute, ...cartRoute];
