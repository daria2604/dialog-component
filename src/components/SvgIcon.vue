<template>
  <svg :class="className">
    <use :xlink:href="iconPath"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true
    },
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }

      return icon.url;
    },

    className() {
      return 'icon icon-' + this.name;
    }
  }
};
</script>

<style lang="scss">
  .icon {
    display: block;
    color: currentColor;
  }
</style>
