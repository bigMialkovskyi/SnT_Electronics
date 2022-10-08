<template>
  <ul class="product-list">
    <li class="product-element" v-for="product in products" :key="product.id">
      <div
        class="product-img-container"
        v-if="product.product_type == render_product_type"
      >
        <img :src="require(`../assets/img/${product.img_src}`)" alt="product" />
      </div>

      <div
        class="about-product"
        v-if="product.product_type == render_product_type"
      >
        <a href="#" class="product-name">{{ product.title }}</a>
        <p class="product-desc">
          {{ product.description }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Product } from "@/models/product";
import { productApi } from "@/api/product-api";

export default {
  name: "Products",

  props: {
    render_product_type: String,
  },

  data: function () {
    return {
      products: [] as Product[],
      error: null,
    };
  },
  created: async function () {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      productApi.fetchAvailableProducts().then((products) => {
        this.products = products;
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/products.scss";
</style>