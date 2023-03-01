<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";

import CartItem from "./CartItem.vue";

import IconCart from "./icons/IconCart.vue";

import { useCartStore } from "../stores/cartStore";

const isOpen = ref(false);

const store = useCartStore();

const { state } = storeToRefs(store);

const { deleteItem } = store;

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="dropdown-menu">
    <div class="dropdown-menu__toggler" @click="toggleDropdown">
      <IconCart />
      <span v-if="state.count" class="cart__count">{{ state.count }}</span>
    </div>
    <div v-if="isOpen" class="dropdown-menu__content">
      <h3 class="dropdown-menu__header">Cart</h3>
      <div v-if="state.count" class="dropdown-menu__body">
        <CartItem
          :count="state.count"
          :total="state.total"
          @deleteItem="() => deleteItem()"
        />
        <button class="btn block" @click="toggleDropdown">Checkout</button>
      </div>
      <p v-else>Your cart is empty.</p>
    </div>
  </div>
</template>

<style scoped>
.dropdown-menu {
  margin-left: auto;
}
.dropdown-menu__toggler {
  cursor: pointer;
  position: relative;
}

.dropdown-menu__content {
  width: 95%;
  min-height: 14rem;
  background-color: #fff;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 9;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.dropdown-menu__header {
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: var(--clr-neutral-700);
}

.dropdown-menu__body {
  padding: 1rem;
  height: 100%;
}

.dropdown-menu__content p {
  display: grid;
  place-items: center;
  flex: 1;
  font-weight: var(--fw-bold);
}

.cart__count {
  position: absolute;
  top: -0.5rem;
  left: 0.8rem;
  background-color: var(--clr-primary-400);
  color: var(--clr-neutral-100);
  font-weight: var(--fw-bold);
  display: grid;
  place-items: center;
  width: 1rem;
  height: 1rem;
  font-size: 0.6rem;
  border-radius: 50%;
}

@media (min-width: 800px) {
  .dropdown-menu {
    position: relative;
  }

  .dropdown-menu__content {
    width: 25rem;
    top: 2rem;
    left: -4rem;
  }
}
</style>
