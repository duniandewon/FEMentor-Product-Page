<script setup lang="ts">
import IconClose from "./icons/IconCloseMenu.vue";

interface Props {
  isOpen: boolean;
}

defineProps<Props>();

const emit = defineEmits(["onClose"]);

const handleOnClose = () => emit("onClose");
</script>

<template>
  <Teleport to="body" v-if="isOpen">
    <div class="backdrop" @click.self="handleOnClose">
      <div class="modal">
        <button class="modal__close" @click="handleOnClose">
          <IconClose color="#fff" />
        </button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.modal {
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  max-width: 30rem;
}

.modal__close {
  position: absolute;
  top: -1.5rem;
  right: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
}
</style>
