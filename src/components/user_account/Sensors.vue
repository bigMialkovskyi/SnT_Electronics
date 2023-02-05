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

  // computed: {
  //   async selectDevice() {
  //     const result = null;
  //     this.devices.forEach((element) => {
  //       console.log(element.id);
  //       // if (element.id == this.selected) result = element;
  //     });
  //     console.log(result);
  //     return result;
  //   },
  // },

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
      const temperature = [];
      const date = [];
      let device;

      if ((await this.selectDevice()) == null) device = this.devices[0];
      else device = await this.selectDevice();

      console.log(device);

      device.measurements.forEach((element) => {
        temperature.push(element.airTemperature);
        date.push(element.updateTime.slice(4, 21));
      });
      return {
        temperature,
        date,
      };
    },

    // destroyChart(){
    //    var grapharea = document.getElementById("myChart").getContext("2d");
    //    grapharea.destroy()
    // },

    async createChart() {
      const { temperature, date } = await this.getMeas();
      let grapharea = document.getElementById("myChart").getContext("2d");

      let chart = new Chart(grapharea, {
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
      // if (chart) chart.destroy();
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