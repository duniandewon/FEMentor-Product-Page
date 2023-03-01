<script setup lang="ts">
import IconCloseMenu from "./icons/IconCloseMenu.vue";

interface Props {
  isOpen: boolean;
}

defineProps<Props>();
</script>

<template>
  <div v-show="isOpen" class="mobile-menu-container">
    <div class="backdrop"></div>
    <aside class="mobile-menu">
      <section class="mobile-menu__header">
        <button class="mobile-menu__close">
          <IconCloseMenu />
        </button>
      </section>
      <section class="mobile-menu__list">
        <p class="mobile-menu__item">Collections</p>
        <p class="mobile-menu__item">Men</p>
        <p class="mobile-menu__item">Women</p>
        <p class="mobile-menu__item">About</p>
        <p class="mobile-menu__item">Contact</p>
      </section>
    </aside>
  </div>
</template>

<style scoped>
.mobile-menu-container,
.mobile-menu,
.backdrop {
  position: absolute;
}

.mobile-menu,
.backdrop {
  top: 0;
  left: 0;
  height: 100vh;
}

.mobile-menu-container {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.backdrop {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
}

.mobile-menu {
  background-color: #fff;
  width: 20rem;
  padding: 2rem;
  font-weight: var(--fw-bold);
}

.mobile-menu__close {
  background: transparent;
  border: 0;
  cursor: pointer;
}

.mobile-menu__header {
  margin-bottom: 2.5rem;
}

.mobile-menu__item + .mobile-menu__item {
  margin-top: 1rem;
}
</style>
