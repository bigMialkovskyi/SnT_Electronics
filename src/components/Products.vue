<template>
  <section class="our-products">
    <div class="products">
      <h1 class="products-title">Замовлення наших клієнтів</h1>

      <ul class="product-list">
        <li
          class="product-element"
          v-for="product in products"
          :key="product.id"
        >
          <div class="product-img-container">
            <img
              :src="require(`../assets/img/${product.img_src}`)"
              alt="product"
            />
          </div>

          <div class="about-product">
            <a href="#" class="product-name">{{ product.title }}</a>
            <p class="product-desc">
              {{ product.description }}
            </p>
          </div>
        </li>
      </ul>

      <Hexagon />
    </div>
  </section>
</template>

<script lang="ts">
import Hexagon from "@/components/Hexagon.vue";

// const  productList = require ('./productList.json');

// import { Product } from "@/models/product";
// import { productApi } from "../api/product-api";
import { productList } from "@/api/product-api";

export default {
  name: "Products",
  components: {
    Hexagon,
  },
  props: {
    msg: String,
  },

  data: function () {
    return {
      products: null,
    };
  },
  created: async function () {
    this.products = await this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.isFetching = true;

      // productApi
      //   .fetchAvailableProducts()
      //   .then((products) => {
      //     this.products = products;
      //   })
      //   .finally(() => {
      //     this.isFetching = false;
      //   });
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productList);
        }, 200);
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/products.scss";
</style>