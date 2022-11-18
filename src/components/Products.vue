<template>
  <section class="our-products">
    <div class="products">
      <h1 class="products-title">Замовлення наших клієнтів</h1> 
      <div class="product-type-container for-farmers">
        <ProductList
          render_product_type="for_farmers"
          group_type_title="Розробки для аграріїв та сільського господарства"
        />
      </div>
      <div class="product-type-container measuring-devices">
        <ProductList
          render_product_type="measuring_device"
          group_type_title="Вимірювальні прилади"
        />
      </div>
      <div class="product-type-container other">
        <ProductList
          render_product_type="other"
          group_type_title="Інше"
        />
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