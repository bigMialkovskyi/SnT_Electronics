<template>
  <div class="user-document">
    <ul class="sensors-list">
      <li
        @click="selected = `${device.id}`"
        class="sensor-element"
        v-for="device in devices"
        :key="device.id"
      >
        <!-- <div>
          <p>{{ device.name }}</p>
        </div> -->
        <p class="device-name">{{ device.name }}</p>

        <div class="preview-bar">
          <div class="preview-element">
            <img
              class="preview-element-icon"
              src="../../assets/img/battery-charging-vertical.svg"
              alt="batery"
            />
            {{ device.batteryStatus }}
          </div>
          <div class="preview-element">
            <img
              class="preview-element-icon"
              src="../../assets/img/temperature-low.svg"
              alt="batery"
            />
            <p>{{ device.measurements[0].airTemperature }}</p>
          </div>
          <div class="preview-element">
            <img
              class="preview-element-icon"
              src="../../assets/img/humidity-light.svg"
              alt="batery"
            />
            <p>{{ device.measurements[0].humidity }}</p>
          </div>
          <div class="preview-element">
            <img
              class="preview-element-icon"
              src="../../assets/img/p-button.svg"
              alt="batery"
            />
            <p>{{ device.measurements[0].pressure }}</p>
          </div>
        </div>
      </li>
      <li
        @click="showModal = !showModal"
        class="sensor-element new-sensor-button"
      >
        <p>add new sensor</p>
      </li>
    </ul>

    <div class="chart">
      <div class="nav-bar">
        <ul class="options">
          <li
            @click="selectedParameter = `airTemperature`"
            class="option-element"
          >
            air temperature
          </li>
          <li
            @click="selectedParameter = `soilTemperature`"
            class="option-element"
          >
            soil temperature
          </li>
          <li @click="selectedParameter = `pressure`" class="option-element">
            pressure
          </li>
          <li @click="selectedParameter = `humidity`" class="option-element">
            humidity
          </li>
        </ul>
      </div>
      <canvas class="chart-element" id="myChart"></canvas>
    </div>
    <NewSensorWindow
      v-if="showModal"
      @close="showModal = false"
      @confirm="connectSensor"
    />
  </div>
</template>

<script>
import store from "@/store";
import { sensorApi } from "@/api/sensors-api";
import Chart from "chart.js/auto";
import NewSensorWindow from "@/components/user_account/NewSensorWindow.vue";

export default {
  name: "Sensors",
  store,

  components: {
    NewSensorWindow,
  },

  data() {
    return {
      showError: false,
      showModal: false,
      devices: [],
      selected: "",
      selectedParameter: "",
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

    selectedParameter(newVal) {
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
      const pressure = [];
      const humidity = [];
      const date = [];
      let device;

      if ((await this.selectDevice()) == null) device = this.devices[0];
      else device = await this.selectDevice();

      device.measurements.forEach((element) => {
        airTemperature.unshift(element.airTemperature);
        soilTemperature.unshift(element.soilTemperature);
        pressure.unshift(element.pressure);
        humidity.unshift(element.humidity);
        date.unshift(element.updateTime.slice(4, 21));
      });
      return {
        airTemperature,
        soilTemperature,
        pressure,
        humidity,
        date,
      };
    },

    async createChart() {
      const { airTemperature, soilTemperature, pressure, humidity, date } =
        await this.getMeas();
      let grapharea = document.getElementById("myChart").getContext("2d");

      let measForRender = [];
      let label = "";

      switch (this.selectedParameter) {
        case "airTemperature":
          measForRender = airTemperature;
          label = "air temperature level";
          break;
        case "soilTemperature":
          measForRender = soilTemperature;
          label = "soil temperature level";
          break;
        case "pressure":
          measForRender = pressure;
          label = "pressure level";
          break;
        case "humidity":
          measForRender = humidity;
          label = "humidity level";
          break;
        default:
          measForRender = airTemperature;
          label = "air temperature level";
      }

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
              label: label,
              data: measForRender,
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

    async connectSensor({ userID, sensorID, sensorName }) {
      const form = {
        userID: userID,
        sensorID: sensorID,
        name: sensorName,
      };
      console.log(await sensorApi.connectSensor(form));
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  box-shadow: 0px 0px 24px rgba(0, 0, 255, 0.2);

}

.sensor-element {
  padding: 0.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 1.5vh 0;
  height: 7vh;
  border-radius: 5px;
  // background-color: rgb(0, 191, 255);
  box-shadow: 0px -14px 14px rgba(0, 0, 255, 0.1) inset;
  border-top: 3px solid rgb(0, 255, 127, 0.5);
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

.device-name {
  margin-right: auto;
}

.options {
  display: flex;
  height: 6vh;
  width: 68vw;
  margin: 20px 0;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  background-color: rgb(0, 191, 255);
  box-shadow: 0px 0px 24px rgba(0, 0, 255, 0.2);
}

.option-element {
  display: flex;
  align-items: center;
  padding: 0 3%;
  height: 4vh;
  border-radius: 5px;
  background-color: rgb(0, 191, 255);
  box-shadow: 0px 0px 1vh rgba(0, 0, 255, 0.3);
  border-top: 2px solid rgb(0, 255, 127, 0.5);
  border-bottom: 2px solid rgb(0, 255, 127, 0.5);
}

.preview-bar {
  border-radius: 5px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5vh;
}

.preview-element {
  display: flex;
  align-items: center;
}

.preview-element-icon {
  height: 2.5vh;
}

.option-element:hover {
  cursor: pointer;
  background-color: #87cefa;
}

.option-element:active {
  background-color: #1e90ff;
}

.option-element:focus {
  background-color: #1e90ff;
}

li {
  text-transform: uppercase;
}

.new-sensor-button {
  margin-top: auto;
  p {
    margin: auto;
  }
}
</style>