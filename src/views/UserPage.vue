<template>
  <div class="user-page">
    <section class="banner">
      <div class="container">
        <div class="banner-content">
          <h1 class="slogan">COMMING SOON</h1>
          <h2 class="slogan-desc">Дякуюємо що ви з нами</h2>
        </div>
      </div>
    </section>
    <div class="message">
      <h2>
        Зовсім скоро ми перезнтуємо нашу нову розробку для професійного
        аграрного сектору та домашнього використання
      </h2>
    </div>
    <ul class="sensors-list">
      <li class="sensor-element" v-for="device in devices" :key="device.id">
        <p>{{ device }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
import store from "@/store";
import { sensorApi } from "@/api/sensors-api";

export default {
  name: "UserPage",
  store,
  components: {},

  data() {
    return {
      showError: false,
      devices: null,
    };
  },

  // mounted() {
  //   // this.devices = this.getSensorsList;
  // },

  mounted: async function () {
    // this.getSensorsList();
    this.getSensors();
    // console.log(this.devices)
  },

  methods: {
    getSensors() {
      sensorApi.getMeasurements().then((measForRespose) => {
        this.devices = measForRespose;
      });
    },
  },

  // computed: {
  //   getSensorsList: function () {
  //     return this.$store.getters.StateDevices;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/banner.scss";

.message {
  margin-top: 80px;
  margin-bottom: 80px;
  h2 {
    font-size: 24px;
    text-align: center;
  }
}
</style>