<template>
  <header class="header">
    <div class="container">
      <router-link to="/">
        <div class="logo">
          <img class="logo-img" src="../assets/img/logo.png" alt="logo" />
          <!-- <p class="logo-text">SnT<span> Electronics</span></p> -->
          <p class="logo-text"><span class="logo-print">SITRIX</span></p>
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
          <a href="#our-products">Наша продукція</a>
          <ul class="submenu">
            <li>
              <img src="../assets/img/ear-of-corn.svg" alt="icon" /><a
                href="#for_farmers"
                >Аграрні розробки</a
              >
            </li>
            <li>
              <img src="../assets/img/weight-scale.svg" alt="icon" /><a
                href="#measuring_device"
                >Вимірювальні прилади</a
              >
            </li>
            <li>
              <img src="../assets/img/gear.svg" alt="icon" /><a href="#other"
                >Інше</a
              >
            </li>
          </ul>
        </li>
        <li><a href="#general-info">Про нас</a></li>
        <li><a href="#contacts">Контакти </a></li>
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
      <router-link v-if="!isLoggedIn" class="user-page-icon-box" to="/login">
        <img
          class="user-page-icon"
          src="../assets/img/person-no-login.svg"
          alt="person icon"
        />
      </router-link>
      <router-link v-if="isLoggedIn" class="user-page-icon-box" to="/user-page">
        <img
          class="user-page-icon"
          src="../assets/img/person-logined.svg"
          alt="person icon"
        />
      </router-link>
      <span v-if="isLoggedIn" class="log-out-icon-box" @click="logout">
        <img
          class="user-page-icon"
          src="../assets/img/log-out.svg"
          alt="person icon"
        />
      </span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  data: function () {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/header.scss";
@import "../styles/menu-hamburger.scss";

.logo-print{
  margin-right: 0.5vh;
  margin-left: -1.25vh;
}

.active {
  display: block;
}

.user-page-icon {
  width: 18px;
  height: 18px;
}

.user-page-icon-box,
.log-out-icon-box {
  width: 50px;
  height: 50px;
  background-color: #00bfff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
}

.user-page-icon-box:hover {
  cursor: pointer;
  background-color: #87cefa;
}

.user-page-icon-box:active {
  background-color: #1e90ff;
}
</style>