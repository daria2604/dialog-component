<template>
  <div class="dialog" id="dialog" :class="isModalOpen ? 'dialog--open' : ''">
    <div class="dialog__container">
      <slot></slot>
    </div>
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

  background-color: rgba($black, .4);

  z-index: 20;

  content: "";

  &--open {
    display: block;
  }

  &__container {
    position: relative;
    max-width: 700px;
    margin: 100px auto;
    padding: 30px 50px;

    border-radius: 24px;
    background-color: $color-background;

    z-index: 30;
  }
}
</style>
