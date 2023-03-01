<template>
  <nav class="nav">
    <p class="nav__item">Collections</p>
    <p class="nav__item">Men</p>
    <p class="nav__item">Women</p>
    <p class="nav__item">About</p>
    <p class="nav__item">Contact</p>
  </nav>
</template>

<style scoped>
.nav {
  display: none;
  gap: 2rem;
  margin-left: 2rem;
}

.nav__item {
  cursor: pointer;
}

@media (min-width: 800px) {
  .nav {
    display: flex;
  }
}
</style>
