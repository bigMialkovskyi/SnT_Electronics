<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img class="logo-img" src="../assets/img/logo.png" alt="logo" />
        <p class="logo-text">SnT<span> Electronics</span></p>
      </div>
      <a
        @click="showMobileMenu = !showMobileMenu"
        class="menu-hamburger"
        href="#"
      >
        <img src="../assets/img/menu-hambuger.svg" alt="menu-hamburger" />
      </a>
      <ul class="header-menu" :class="{ active: showMobileMenu }">
        <li class="down">
          <a href="#">Наша продукція</a>
          <ul class="submenu">
            <li>
              <img src="../assets/img/battery-status.svg" alt="icon" /><a
                href=""
                >Блоки живлення</a
              >
            </li>
            <li>
              <img src="../assets/img/option-2.svg" alt="icon" /><a href=""
                >Блоки управління</a
              >
            </li>
            <li>
              <img src="../assets/img/weight-scale.svg" alt="icon" /><a href=""
                >Вимірювальні прилади</a
              >
            </li>
          </ul>
        </li>
        <li><a href="#">Про нас</a></li>
        <li><a href="#">Контакти </a></li>
      </ul>
      <ul class="tel header-menu">
        <li class="down">
          <img src="../assets/img/tel.png" alt="tel" />
          <a href="tel:(067) 570 34 89">(067) 570 34 89</a>
          <ul class="submenu">
            <li>
              <img src="../assets/img/tel.png" alt="tel" />
              <a href="tel:(067) 570 34 89">(067) 570 34 89</a>
            </li>
            <li>
              <img src="../assets/img/tel.png" alt="tel" />
              <a href="tel:(067) 570 34 89">(067) 570 34 89</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data: function () {
    return {
      showMobileMenu: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/header.scss";
@import "../styles/menu-hamburger.scss";

.active {
  display: block;
}
</style>