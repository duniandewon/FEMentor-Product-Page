<script setup lang="ts">
import { reactive } from "vue";

import IconNext from "./icons/IconNext.vue";
import IconPrevious from "./icons/IconPrevious.vue";

const state = reactive({
  imageIndex: 0,
  images: [1, 2, 3, 4],
});

withDefaults(defineProps<{ showControls?: boolean }>(), { showControls: false });

const emit = defineEmits(["openModal"]);

function onSetActive(index: number) {
  state.imageIndex = index;
}

function handleOpenModal() {
  emit("openModal");
}

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
  <div class="galery">
    <div v-if="showControls" class="galery__controls">
        <button
          class="galery__control galery__control--prev"
          @click="prevImage"
        >
          <IconPrevious />
        </button>
        <button
          class="galery__control galery__control--next"
          @click="nextImage"
        >
          <IconNext />
        </button>
      </div>
    <picture @click="handleOpenModal">
      <img
        :src="`images/image-product-${state.imageIndex + 1}.jpg`"
        alt="product-1"
      />
    </picture>
    <div class="thumbnails">
      <div
        class="thumbnails__item"
        v-for="thumbnail in state.images"
        :class="{
          active: thumbnail === state.imageIndex + 1,
        }"
        @click="onSetActive(state.images.indexOf(thumbnail))"
      >
        <img
          :src="`images/image-product-${thumbnail}-thumbnail.jpg`"
          :alt="`image-product-${thumbnail}-thumbnail`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.galery {
  display: none;

}

img {
  border-radius: 15px;
  cursor: pointer;
}

.thumbnails {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.thumbnails__item {
  width: 4rem;
  border-radius: 10px;
}
.thumbnails__item img {
  border-radius: 10px;
}

.thumbnails__item.active {
  border: 2px solid var(--clr-primary-400);
}

.thumbnails__item.active img {
  opacity: 0.4;
}

.galery__control {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0;
  display: grid;
  place-items: center;
}

.galery__control--next {
  right: -1.2rem;
}

.galery__control--prev {
  left: -1.2rem;
}

@media (min-width: 800px) {
  .galery {
    display: block;
  }
}
</style>
