import axios from 'axios';

import { Product } from '@/models/product';

import productList from './productList';
// const  productList = require ('./productList.json');

const fetchAvailableProducts = async (): Promise<Product[]> => {
	return axios
		.get(`/products/get/all`)
		.then(res => res.data.products)
		.catch(e => {
			console.error(e);
			return productList;
		});
};

const fetchProducts = async (): Promise<Product[]> => {
	return axios
		.get(`/products/get/all`)
		.then(res => res.data.products)
		.catch(e => {
			console.error(e);
			return productList;
		});
};

export const productApi = {
	fetchAvailableProducts,
	fetchProducts,
	productList
};