<template>
  <div class="default-layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "defaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.default-layout {
  height: calc(99% - 60px - 80px); //app height - header height - footer heignt
}
</style>