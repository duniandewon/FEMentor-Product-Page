<script setup lang="ts">
import { ref } from "vue";

import Navigation from "./components/Navigation.vue";
import Avatar from "./components/Avatar.vue";
import MobileMenu from "./components/MobileMenu.vue";
import DropDownMenu from "./components/DropDownMenu.vue";
import ImageSlider from "./components/ImageSlider.vue";
import Product from "./components/Product.vue";
import Galery from "./components/Galery.vue";
import LightBox from "./components/LightBox.vue";

import IconMenu from "./components/icons/IconMenu.vue";
import IconLogo from "./components/icons/IconLogo.vue";

const isMobileMenuOpen = ref(false);
const isModalOpen = ref(false);

function toggleModal() {
  isModalOpen.value = !isModalOpen.value;
}

</script>

<template>
  <div class="container">
    <header class="header">
      <button class="toggler">
        <IconMenu />
      </button>
      <a href="/" class="logo">
        <IconLogo />
      </a>
      <Navigation />
      <DropDownMenu />
      <Avatar />
    </header>
    <main class="main">
      <ImageSlider />
      <Galery @openModal="toggleModal" />
      <Product />
    </main>
  </div>
  <MobileMenu :isOpen="isMobileMenuOpen" />
  <LightBox :isOpen="isModalOpen" @onClose="toggleModal" />
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
}

.toggler {
  background: transparent;
  border: 0;
  cursor: pointer;
  position: relative;
}

@media (min-width: 800px) {
  .main {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;
    padding: 0 2rem;
  }

  .header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .toggler {
    display: none;
  }
}
</style>
