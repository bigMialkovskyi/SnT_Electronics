<template>
  <div class="home">
    <Banner />
    <GeneralInfo />
    <Products />
    <Contacts />
    <Footer />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Banner.vue";
import GeneralInfo from "@/components/GeneralInfo.vue";
import Products from "@/components/Products.vue";
import Contacts from "@/components/Contacts.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Banner,
    GeneralInfo,
    Products,
    Contacts,
    Footer,
  },
};
</script>
