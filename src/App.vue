<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import defaultLayout from "@/layouts/default.vue";

export default {
  components: {
    Header,
    defaultLayout,
  },
  computed: {
    layout: () => {
      return "defaultLayout";
    },
  },
};
</script>


<style lang="scss">
@import "./styles/default_styles.scss";
@import "./styles/variables.scss";

#app {
  height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
