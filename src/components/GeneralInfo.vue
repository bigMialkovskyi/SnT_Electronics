<template>
  <section id="general-info" class="general-info">
    <div class="container">
      <div class="about-us">
        <h1 class="about-us-title">про нас</h1>
        <div class="about-us-desc">
          <p class="about-us-text">
            Наша компанія є взірцем у виробництві електроніки на замовлення. Ми
            пропонуємо широкий спектр послуг, включаючи проектування, створення
            прототипів і виробництво електроніки для задоволення конкретних
            потреб наших клієнтів. Незалежно від того, чи потрібна вам невелика
            партія спеціально розроблених схем чи велика виробнича партія
            спеціалізованих електронних компонентів, у нас є досвід і ресурси,
            щоб надати високоякісні продукти, які точно відповідають вашим
            вимогам. Наша команда досвідчених інженерів і техніків прагне
            забезпечити відмінне обслуговування клієнтів і досягти виняткових
            результатів. Зв’яжіться з нами сьогодні, щоб дізнатися більше про
            те, як ми можемо допомогти вам із вашими потребами у виробництві
            електроніки.
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