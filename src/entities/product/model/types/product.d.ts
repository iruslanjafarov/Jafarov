/**
 * IProduct
 *
 * This interface defines the structure of a product object, which includes essential properties
 * such as the product's path, name, price, and type.
 *
 * @property {string} path - The URL or path to the product's image or detail page.
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {string} type - The type or category of the product.
 */

export interface IProduct {
	path: string;
	name: string;
	price: number;
	type: string;
}

/**
 * IUseProducts
 *
 * This interface defines the structure of the state for a product-related hook or component.
 * It contains the list of products and a loading state.
 *
 * @property {IProduct} products - A single product object.
 * It seems like this interface is meant to hold one product, but if you need an array of products, consider changing it to `IProduct[]`.
 * @property {boolean} loading - A boolean indicating whether the data for the product is still being loaded or not.
 */

export interface IUseProducts {
	products: IProduct[];
	loading: boolean;
}
