<template>
  <div class="group-type-box">
    <div class="direction-box">
      <a
        class="group-type-title unselectable"
        v-on:click="showProduct = !showProduct"
        >{{ group_type_title }}</a
      >
      <p
        class="content-down direction-arrow"
        v-on:click="showProduct = !showProduct"
        v-if="!showProduct"
      ></p>
      <p
        class="content-up direction-arrow"
        v-on:click="showProduct = !showProduct"
        v-if="showProduct"
      ></p>
    </div>
    <ul class="product-list" v-if="showProduct">
      <li class="product-element" v-for="product in products" :key="product.id">
        <div
          class="product-img-container"
          v-if="product.product_type == render_product_type"
        >
          <!-- <img
           :src="`http://localhost:3093/uploads/${product.media.path.split('\\')[2]}`"
            alt="product"
          /> -->
          <img
            :src="` https://snt-electronics.herokuapp.com/uploads/${
              product.media.path.split('\\')[2] ||
              product.media.path.split('/')[1]
            }`"
            alt="product"
          />
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
  </div>
</template>

<script lang="ts">
import { Product } from "@/models/product";
import { productApi } from "@/api/product-api";

export default {
  name: "Products",

  props: {
    render_product_type: String,
    group_type_title: String,
  },

  data: function () {
    return {
      products: [] as Product[],
      error: null,
      showProduct: true,
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

.direction-box {
  display: flex;
}

.direction-arrow {
  color: white;
  font-size: 28px;
  padding-left: 1em;
  padding-top: 0.5%;
  position: relative;
  z-index: 1;
  font-stretch: 200%;
}

.content-down::after {
  content: " \02C5";
}
.content-up::after {
  content: " \02C4";
}
</style>