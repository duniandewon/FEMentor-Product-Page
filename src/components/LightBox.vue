<script setup lang="ts">
import Modal from "./Modal.vue";
import Galery from "./Galery.vue";

defineProps<{ isOpen: boolean }>();

const emit = defineEmits(["onClose"]);

const handleOnClose = () => emit("onClose");
</script>

<template>
  <Modal :isOpen="isOpen" @onClose="handleOnClose">
    <Galery :showControls="true" />
  </Modal>
</template>
