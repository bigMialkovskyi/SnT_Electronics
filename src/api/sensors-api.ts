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
		.then(res => res.data.measForRespose)
		.catch(e => {
			console.error(e);
			return
		});
};

const connectSensor = async (form: any) => {
	return await axios
		.post(`${API_PATHS.local}/agro-gsm-sensor/connect/user`, form)
		.then(res => res.data.message)
		.catch(e => {
			// console.log(res.data.error)
			console.error(e);
			// console.error(e.response.data.error);
			return
		});
};

export const sensorApi = {
	getMeasurements,
	connectSensor
};