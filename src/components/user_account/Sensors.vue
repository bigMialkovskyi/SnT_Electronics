<template>
  <div class="user-document">
    <ul class="sensors-list">
      <li
        @click="selected = `${device.id}`"
        class="sensor-element"
        v-for="device in devices"
        :key="device.id"
      >
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
      selected: "",
    };
  },

  created: async function () {
    this.devices = await this.getSensors();
    this.createChart();
  },

  watch: {
    async selected(newVal) {
      this.createChart();
    },
  },

  methods: {
    async selectDevice() {
      let result = {};
      if (!this.selected) return null;
      this.devices.forEach((element) => {
        if (element.id == this.selected) result = element;
      });
      return result;
    },

    async getSensors() {
      return await sensorApi.getMeasurements();
    },

    async getMeas() {
      const airTemperature = [];
      const soilTemperature = [];
      const preasure = [];
      const humidity = [];
      const date = [];
      let device;

      if ((await this.selectDevice()) == null) device = this.devices[0];
      else device = await this.selectDevice();

      // console.log(device);

      device.measurements.forEach((element) => {
        airTemperature.unshift(element.airTemperature);
        soilTemperature.unshift(element.soilTemperature);
        preasure.unshift(element.preasure);
        humidity.unshift(element.humidity);
        date.unshift(element.updateTime.slice(4, 21));
      });
      return {
        airTemperature,
        soilTemperature,
        preasure,
        humidity,
        date,
      };
    },

    async createChart() {
      const { airTemperature, soilTemperature, preasure, humidity, date } = await this.getMeas();
      let grapharea = document.getElementById("myChart").getContext("2d");

      //canvas refresh
      let chartStatus = Chart.getChart("myChart"); // <canvas> id
      if (chartStatus != undefined) {
        chartStatus.destroy();
      }

      new Chart(grapharea, {
        type: "line",
        data: {
          labels: date,
          datasets: [
            {
              label: "air temperature level",
              data: airTemperature,
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

.sensor-element:hover {
  cursor: pointer;
  background-color: #87cefa;
}

.sensor-element:active {
  background-color: #1e90ff;
}

.sensor-element:focus {
  background-color: #1e90ff;
}
</style>