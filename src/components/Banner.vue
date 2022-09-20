<template>
 <section class="banner">
    <div class="container">
      <div class="banner-content">
        <h1 class="slogan">Електроніка на замовлення</h1>
        <h2 class="slogan-desc">Ваші бажання - наші турботи</h2>
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