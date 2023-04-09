import axios from 'axios';
import store from "@/store";

let sensorsList = store.getters.StateDevices;

const data = {
	sensorsList: sensorsList
}

const getMeasurements = async () => {
	return await axios
		.post(`/agro-gsm-sensor/get/measurements`, data)
		.then(res => res.data.measForRespose)
		.catch(e => {
			console.error(e);
			return
		});
};

const connectSensor = async (form: any) => {
	return await axios
		.post(`/agro-gsm-sensor/connect/user`, form)
		.then(res => res.data.message)
		.catch(e => {
			console.error(e);
			return
		});
};

export const sensorApi = {
	getMeasurements,
	connectSensor
};