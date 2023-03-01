<script setup lang="ts">
import { ref } from "vue";

import IconCart from "./icons/IconCart.vue";
import IconPlus from "./icons/IconPlus.vue";
import IconMinus from "./icons/IconMinus.vue";

import { useCartStore } from "../stores/cartStore";

const productCount = ref(1);

const { addItem } = useCartStore();

function countProducts(action: "inc" | "dec") {
  if (action === "inc") productCount.value++;
  if (action === "dec" && productCount.value > 1) productCount.value--;
}

function handleAddToCart() {
  addItem(productCount.value);
}
</script>

<template>
  <div class="product">
    <h3 class="product__category">SNEAKER COMPANY</h3>
    <h1 class="product__title">Fall Limited Edition Sneakers</h1>
    <p class="product__description">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.
    </p>
    <div class="product__prices">
      <h3 class="product__price">$125.00</h3>
      <p class="product__discount">50%</p>
      <p class="product__original-price">$250.00</p>
    </div>
    <div class="product__footer">
      <div class="product__counter">
        <button @click="countProducts('dec')">
          <IconMinus />
        </button>
        <span>{{ productCount }}</span>
        <button @click="countProducts('inc')">
          <IconPlus />
        </button>
      </div>
      <button class="btn" @click="handleAddToCart">
        <IconCart color="#fff" />
        <span>Add to cart</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.product {
  padding: 1rem 2rem;
}

.product__category {
  color: var(--clr-primary-400);
  font-size: 0.75rem;
}

.product__title {
  line-height: 1;
  color: var(--clr-neutral-700);
  margin-top: 0.625rem;
  margin-bottom: 1.2rem;
}

.product__prices {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--clr-neutral-700);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.product__discount,
.product__original-price {
  font-size: 0.8rem;
}

.product__discount {
  margin-right: auto;
  background-color: var(--clr-primary-300);
  color: var(--clr-primary-400);
  font-weight: var(--fw-bold);
  padding: 3px 5px;
  border-radius: 5px;
}

.product__original-price {
  text-decoration: line-through;
  color: var(--clr-neutral-500);
}

.product__counter {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr-neutral-400);
  border-radius: 8px;
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-700);
}

.product__counter button {
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 1rem;
}

.product__footer {
  display: grid;
  gap: 2rem;
}

@media (min-width: 800px) {
  .product__footer {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
