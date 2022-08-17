<template>
 <section class="banner">
    <div class="container">
      <div class="banner-content">
        <h1 class="slogan">slogan</h1>
        <h2 class="slogan-desc">a very long and cool description of our slogan</h2>
        <a href="#">Зв'яжись з нами</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/banner.scss";

</style>