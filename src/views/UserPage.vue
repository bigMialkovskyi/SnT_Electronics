<template>
  <div class="container">
    <p class="test-content">This is user page</p>
  </div>
</template>


<script>
export default {
  name: "UserPage",
  components: {},
  data() {
    return {
      showError: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.test-content {
  margin: 40px 0;
  background: green;
  font-size: 24px;
}
</style>