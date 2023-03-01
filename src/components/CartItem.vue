<script setup lang="ts">
import IconDelete from "./icons/IconDelete.vue";

defineProps<{ count: number; total: number }>();

const emits = defineEmits(["deleteItem"]);

function onClickDelete() {
  emits("deleteItem");
}
</script>

<template>
  <div class="cart-item">
    <img
      src="images/image-product-1-thumbnail.jpg"
      alt="Fall limited edition Sneakers"
      class="cart-item__thumbnail"
    />
    <div class="cart-item__body">
      <p class="cart-item__name">Fall limited edition Sneakers</p>
      <p class="cart-item__detail">
        <span class="cart-item__price">$125.00</span
        ><span class="cart-item__count">x {{ count }}</span
        ><span class="cart-item__total">${{ total }}.00</span>
      </p>
    </div>
    <button class="cart-item__delete" @click="onClickDelete">
      <IconDelete />
    </button>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.cart-item__thumbnail {
  width: 3rem;
  border-radius: 5px;
}

.cart-item__body {
  flex: 1;
}

.cart-item__detail {
  display: flex;
  gap: 0.5rem;
}

.cart-item__total {
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-700);
}

.cart-item__delete {
  background: transparent;
  border: 0;
  cursor: pointer;
}
</style>
