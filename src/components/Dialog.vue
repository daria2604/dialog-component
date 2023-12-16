<template>
  <div class="dialog" id="dialog" :class="isModalOpen ? 'dialog--open' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    isModalOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.dialog {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: none;
  width: 100%;
  height: 100%;

  background-color: pink;

  &--open {
    display: block;
  }
}
</style>
