import axios from 'axios';

import { API_PATHS } from '@/constants/api-paths';
import { Product } from '@/models/product';

const fetchAvailableProducts = async (): Promise<Product[]> => {
	return axios
		.get(`${API_PATHS.bff}/products/get/all`)
		.then(res => res.data.products)
		.catch(e => {
			console.error(e);
      return
		});
};

const fetchProducts = async (): Promise<Product[]> => {
	return axios
		.get(`${API_PATHS.bff}/products/get/all`)
		.then(res => res.data.products)
		.catch(e => {
			console.error(e);
      return
		});
};

export const productApi = {
	fetchAvailableProducts,
	fetchProducts,
};