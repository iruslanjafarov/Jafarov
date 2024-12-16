/**
 * IProduct
 *
 * This interface defines the structure of a product object, which includes essential properties
 * such as the product's id, path, name, price, and type.
 *
 * @property {number} id - The unique identifier for the product.
 * @property {string} path - The URL or path to the product's image or details page.
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {string} type - The type or category of the product.
 */

export interface IProduct {
	id: number;
	path: string;
	name: string;
	price: number;
	type: string;
}

/**
 * IUseProduct
 *
 * This interface defines the structure of the state for a product-related component or hook.
 * It includes the product object and a loading state.
 *
 * @property {IProduct} product - The product object. This description assumes you're using a single product.
 * @property {boolean} loading - A boolean indicating whether the product data is still being loaded.
 */

export interface IUseProduct {
	product: IProduct | undefined;
	loading: boolean;
}
