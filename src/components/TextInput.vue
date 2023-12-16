<template>
  <div class='input'>
    <input
      type='text'
      class='input__control'
      :name="`${name}Input`"
      :id="`${name}Input`"
      :placeholder="placeholder"
    />
    <span
      :class="`input__comment ${hasComment ? 'input__comment--show' : ''}`"
      >{{ commentText }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    commentText: {
      type: String,
    },
    hasComment: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  &__comment {
    display: none;

    &--show {
      display: block;
    }
  }
}
</style>
