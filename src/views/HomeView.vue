<template>
  <div class="home">
    <Banner />
    <GeneralInfo />
    <Products />
    <!-- <Contacts /> -->
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Banner.vue";
import GeneralInfo from "@/components/GeneralInfo.vue";
import Products from "@/components/Products.vue";
import Contacts from "@/components/Contacts.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Banner,
    GeneralInfo,
    Products,
    Contacts,
  },
};
</script>