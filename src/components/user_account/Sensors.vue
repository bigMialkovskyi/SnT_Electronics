<template>
  <div>
    <ul class="sensors-list">
      <li class="sensor-element" v-for="device in devices" :key="device.id">
        <p>{{ device.name }}</p>
      </li>
    </ul>
    <!-- <div>
      <canvas :id="`chart-${device.id}`"></canvas>
    </div> -->
  </div>
</template>

<script>
import store from "@/store";
import { sensorApi } from "@/api/sensors-api";
import Chart from "chart.js/auto";

export default {
  name: "Sensors",
  store,

  data() {
    return {
      showError: false,
      devices: [],
    };
  },

  created: async function () {
    this.devices = await this.getSensors();
    // console.log(this.devices);
  },

  mounted: async function () {
    console.log(await this.getMeas());
  },

  methods: {
    async getSensors() {
      return await sensorApi.getMeasurements();
    },

    async getMeas() {
      const temperature = [];
      const date = [];

      const selected = await this.devices[0];
      console.log(selected)
      selected.measurements.forEach((element) => {
        temperature.push(element.airTemperature);
        date.push(element.updateTime);
      });
      return {
        temperature,
        date,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";

.sensors-list {
  margin: 20px 0;
  height: 80vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: rgb(0, 191, 255);
}

.sensor-element {
  display: flex;
  align-items: center;
  padding: 0 3%;
  width: 95%;
  border: 1px solid rgb(100, 149, 237);
  margin: 5px 0;
  height: 7vh;
  border-radius: 5px;
  background-color: rgb(0, 180, 255);
}
</style>