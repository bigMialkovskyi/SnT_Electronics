<template>
  <header class="header">
    <div class="container">
      <router-link to="/">
        <div class="logo">
          <img class="logo-img" src="../assets/img/logo.png" alt="logo" />
          <p class="logo-text">SnT<span> Electronics</span></p>
        </div>
      </router-link>
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
      <router-link class="admin-page-icon-box" to="/admin"
        ><img
          class="admin-page-icon"
          src="../assets/img/person.svg"
          alt="person icon"
      /></router-link>
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

.admin-page-icon {
  width: 18px;
  height: 18px;
}

.admin-page-icon-box {
  width: 50px;
  height: 50px;
  background-color: #00bfff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
}

.admin-page-icon-box:hover {
  cursor: pointer;
  background-color: #87cefa;
}

.admin-page-icon-box:active {
  background-color: #1e90ff;
}

</style>