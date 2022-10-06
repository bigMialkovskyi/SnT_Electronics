import axios from 'axios';

import { API_PATHS } from '@/constants/api-paths';
import { Product } from '@/models/product';

import productList from './productList';
// const  productList = require ('./productList.json');

const fetchAvailableProducts = async (): Promise<Product[]> => {
	return axios
		.get(`${API_PATHS.bff}/products/get/all`)
		.then(res => res.data.products)
		.catch(e => {
			console.error(e);
			// << !!! mocks if any error !!!
			return productList;
		});
};

const fetchProducts = async (): Promise<Product[]> => {
	return axios
		.get(`${API_PATHS.bff}/products/get/all`)
		.then(res => res.data.products)
		.catch(e => {
			console.error(e);
			// << !!! mocks if any error !!!
			return productList;
		});
};

// export { productList }

// export default {
// 	fetchAvailableProducts,
// 	fetchProducts,
// 	productList
// };

export const productApi = {
	fetchAvailableProducts,
	fetchProducts,
	productList
};