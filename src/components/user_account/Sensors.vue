<template>
  <div class="user-document">
    <ul class="sensors-list">
      <li @click="selected = this.device.id" class="sensor-element" v-for="device in devices" :key="device.id">
        <p>{{ device.name }}</p>
      </li>
    </ul>
    <div class="chart">
      <canvas class="chart-element" id="myChart"></canvas>
    </div>
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
      selected: null,
    };
  },

  created: async function () {
    this.devices = await this.getSensors();
    this.createChart();
  },

  methods: {
    async getSensors() {
      return await sensorApi.getMeasurements();
    },

    async getMeas() {
      const temperature = [];
      const date = [];

      this.devices[1].measurements.forEach((element) => {
        temperature.push(element.airTemperature);
        date.push(element.updateTime.slice(4, 21));
      });
      return {
        temperature,
        date,
      };
    },

    async createChart() {
      const { temperature, date } = await this.getMeas();
      console.log(temperature, date);
      new Chart(document.getElementById("myChart").getContext("2d"), {
        type: "line",
        data: {
          labels: date,
          datasets: [
            {
              label: "# temperature level ",
              data: temperature,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";

.user-document {
  display: flex;
}

.chart {
  height: 80vh;
  // width: 80vw;
}

.chart-element {
  height: 80vh;
  width: 70vw;
}

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