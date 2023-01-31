<template>
  <section class="banner">
    <div class="container">
      <div class="user-page">
        <div class="banner-content">
          <h1 class="slogan">COMMING SOON</h1>
          <h2 class="slogan-desc">Дякуюємо що ви з нами</h2>
        </div>
        <!-- <div class="message">
        <h2>
          Зовсім скоро ми перезнтуємо нашу нову розробку для професійного
          аграрного сектору та домашнього використання
        </h2>
      </div> -->
      </div>
      <Sensors />
    </div>
  </section>
</template>


<script>
import store from "@/store";
import { sensorApi } from "@/api/sensors-api";
import Sensors from "@/components/user_account/Sensors.vue";

export default {
  name: "UserPage",
  store,
  components: { Sensors },

  data() {
    return {
      showError: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
// @import "../styles/banner.scss";
// @import 'variables.scss';

.banner {
  // background: url("../assets/img/banner-bg-02.jpg")no-repeat;
  background-size: 100% 100%;
  padding-top: 15%;
  padding-bottom: 15%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

.banner-content {
  width: 45%;
  background: rgba(30, 144, 255, 0.8);
  padding: 2%;
  padding-bottom: 4%;
  border-radius: 5px;

  a {
    @include button();
    border-radius: 5px;
  }
}

.slogan {
  margin: 0;
  padding: 0;
  color: $Black;
  @include h1;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bolder;
}

.slogan-desc {
  color: $Black;
  @include h2;
  margin: 20px 0px;
}

/*responсive*/

@media screen and (max-width: 991px) {
  .banner-content {
    width: 75%
  }
}

@media screen and (max-width: 767px) {

  .banner-content {
    padding-bottom: 5%;
  }

  .slogan {
    @include h3;
  }

  .slogan-desc {
    @include h4;
    font-weight: normal;
  }
}

@media screen and (max-width: 575px) {

  .banner-content {
    padding-bottom: 8%;
    width: 80%;

    a {
      padding: 6px 20px;
      border: 1px solid $Blue;

      &:hover {
        border: 1px solid $White;
      }
    }
  }

  .slogan {
    @include h4;
  }

  .slogan-desc {
    @include h5;
    font-weight: normal;
  }
}
</style>