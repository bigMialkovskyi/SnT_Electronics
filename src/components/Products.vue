<template>
  <section class="our-products">
    <div class="products">
      <h1 class="products-title">Замовлення наших клієнтів</h1>
      <div class="for-farmers">
        <ProductList render_product_type="for_farmers" />
      </div>
      <div class="measuring-devices">
        <ProductList render_product_type="measuring_devices" />
      </div>
      <Hexagon />
    </div>
  </section>
</template>

<script lang="ts">
import Hexagon from "@/components/Hexagon.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Products",
  components: {
    Hexagon,
    ProductList,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/products.scss";
</style>