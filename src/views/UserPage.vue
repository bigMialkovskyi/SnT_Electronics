<template>
  <div class="user-page">
    <section class="banner">
      <div class="container">
        <div class="banner-content">
          <h1 class="slogan">COMMING SOON</h1>
          <h2 class="slogan-desc">Дякуюємо що ви з нами</h2>
          <!-- <a href="#">Зв'яжись з нами</a> -->
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
      <li class="sensor-element" v-for="device in devices">
        <p>{{ device }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "UserPage",
  components: {},
  data() {
    return {
      showError: false,
      devices: [],
    };
  },
  mounted() {
    this.devices = this.getSensorsList();
    console.log(this.devices);
  },
  methods: {
    async getSensorsList() {
      return await Promise.all(this.$store.state.devices);
    },
  },
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