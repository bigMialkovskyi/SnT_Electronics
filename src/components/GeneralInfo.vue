<template>
<div class="container">
      <div class="about-us">
        <h1 class="about-us-title">про нас</h1>
        <div class="about-us-desc">
          <p class="about-us-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
          <img src="../assets/img/PCB-about.jpg" alt="PCB-about">
        </div>
      </div>

      <h1 class="about-us-title">Ми пропонуємо</h1>
      <ul class="we-offer">
        <li class="offer-element">
          <div class="offer-icon-container">
            <img src="../assets/img/support.svg" alt="offer-icon">
          </div>
          <h5>консультація</h5>
          <p>Ми пропонуємо консультацію щодо організації проекту та вибору можливих рішень</p>
        </li>

        <li class="offer-element">
          <div class="offer-icon-container">
            <img src="../assets/img/money-bag.svg" alt="offer-icon">
          </div>
          <h5>бюджетне рішення</h5>
          <p>Наші прості та ергономічні розробки будуть по кишені кожному </p>
        </li>

        <li class="offer-element">
          <div class="offer-icon-container">
            <img src="../assets/img/clean-hands.svg" alt="offer-icon">
          </div>
          <h5>підтримка</h5>
          <p>Ми надаємо тех-підтримку та обсуговування наших товарів під час есплуатації </p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'GeneralInfo',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/general_information.scss";

</style>