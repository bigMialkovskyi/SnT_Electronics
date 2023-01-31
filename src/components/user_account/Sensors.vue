<template>
    <ul class="sensors-list">
      <li class="sensor-element" v-for="device in devices" :key="device.id">
        <p>{{ device.name }}</p>
      </li>
    </ul>
</template>

<script lang="ts">
import store from "@/store";
import { sensorApi } from "@/api/sensors-api";

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
  },

  methods: {
    async getSensors() {
      console.log(await sensorApi.getMeasurements());
      return await sensorApi.getMeasurements();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";

.sensors-list {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>