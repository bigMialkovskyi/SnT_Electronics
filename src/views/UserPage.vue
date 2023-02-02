<template>
  <section>
    <div class="container">
      <div class="user-page">
        <!-- <div class="banner-content">
          <h1 class="slogan">COMMING SOON</h1>
          <h2 class="slogan-desc">Дякуюємо що ви з нами</h2>
        </div> -->
        <!-- <div class="message">
        <h2>
          Зовсім скоро ми перезнтуємо нашу нову розробку для професійного
          аграрного сектору та домашнього використання
        </h2>
      </div> -->
      </div>
      <Sensors />
    </div>
  </section>
</template>


<script>
import store from "@/store";
import { sensorApi } from "@/api/sensors-api";
import Sensors from "@/components/user_account/Sensors.vue";

export default {
  name: "UserPage",
  store,
  components: { Sensors },

  data() {
    return {
      showError: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
</style>