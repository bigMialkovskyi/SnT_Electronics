import axios from 'axios';
import store from "@/store";

import { API_PATHS } from '@/constants/api-paths';

let sensorsList = store.getters.StateDevices;

const data = {
	sensorsList: sensorsList
}

const getMeasurements = async () => {
	return await axios
		.post(`${API_PATHS.local}/agro-gsm-sensor/get/measurements`, data)
		.then(res => {
			res.data.measForRespose
			console.log(res)
		})
		.catch(e => {
			console.error(e);
			return
		});
};

export const sensorApi = {
	getMeasurements
};