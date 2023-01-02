<template>
  <ul>
    <li
      v-for="(n, index) in 15"
      :key="index"
      :class="`${randHexType()}`"
      :style="`top: ${randomIntTop()}%; left: ${randomIntLeft()}%;`"
    ></li>
  </ul>
</template>

<script>
export default {
  name: "Hexagon",
  data: function () {
    return {
      hexagon_type: ["hexagon-small", "hexagon-medium", "hexagon-big"],
    };
  },
  methods: {
    randomIntTop: () => Math.floor(Math.random() * (90 - 10) + 10),
    randomIntLeft: () => Math.floor(Math.random() * 80),
    randHexType: () => {
      let hexagon_type = ["hexagon-small", "hexagon-medium", "hexagon-big"];
      let rand = Math.floor(Math.random() * hexagon_type.length);
      return hexagon_type[rand];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/products.scss";
</style>