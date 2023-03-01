<script setup lang="ts">
import { reactive } from "vue";

import IconNext from "./icons/IconNext.vue";
import IconPrevious from "./icons/IconPrevious.vue";

const state = reactive({
  imageIndex: 0,
  images: [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ],
});

function nextImage() {
  if (state.imageIndex === state.images.length - 1)
    return (state.imageIndex = 0);
  state.imageIndex++;
}

function prevImage() {
  if (state.imageIndex === 0)
    return (state.imageIndex = state.images.length - 1);
  state.imageIndex--;
}
</script>

<template>
  <div class="lightbox">
    <div class="lightbox__main">
      <div class="lightbox__controls">
        <button
          class="lightbox__control lightbox__control--prev"
          @click="prevImage"
        >
          <IconPrevious />
        </button>
        <button
          class="lightbox__control lightbox__control--next"
          @click="nextImage"
        >
          <IconNext />
        </button>
      </div>
      <picture class="lightbox__img">
        <img :src="state.images[state.imageIndex]" alt="product image" />
      </picture>
    </div>
    <div class="lightbox__footer"></div>
  </div>
</template>

<style scoped>
.lightbox__main {
  position: relative;
}

.lightbox__control {
  position: absolute;
  top: 50%;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0;
  display: grid;
  place-items: center;
}

.lightbox__control--next {
  right: 1rem;
}

.lightbox__control--prev {
  left: 1rem;
}

.lightbox__img {
  width: 100%;
  height: 18rem;
}

.lightbox__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 800px) {
  .lightbox {
    display: none;
  }
}
</style>
