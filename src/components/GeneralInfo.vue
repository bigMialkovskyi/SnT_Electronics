<template>
  <section id="general-info" class="general-info">
    <div class="container">
      <div class="about-us">
        <h1 class="about-us-title">про нас</h1>
        <div class="about-us-desc">
          <p class="about-us-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <img src="../assets/img/PCB-about.jpg" alt="PCB-about" />
        </div>
      </div>

      <h1 class="about-us-title">Ми пропонуємо</h1>
      <ul class="we-offer">
        <li class="offer-element" v-for="offer in offers" :key="offer.title">
          <div class="offer-icon-container">
            <img
              :src="require(`../assets/img/${offer.img_src}`)"
              alt="offer-icon"
            />
          </div>
          <h5>{{ offer.offer_title }}</h5>
          <p>{{ offer.offer_desc }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "GeneralInfo",
  props: {},
  data: function () {
    return {
      offers: [
        {
          img_src: "clean-hands.svg",
          offer_title: "консультація",
          offer_desc:
            "Ми пропонуємо консультацію щодо організації проекту та вибору можливих рішень",
        },
        {
          img_src: "money-bag.svg",
          offer_title: "бюджетне рішення",
          offer_desc:
            "Наші прості та ергономічні розробки будуть по кишені кожному",
        },
        {
          img_src: "clean-hands.svg",
          offer_title: "підтримка",
          offer_desc:
            "Ми надаємо тех-підтримку та обсуговування наших товарів під час есплуатації",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/general_information.scss";
</style>