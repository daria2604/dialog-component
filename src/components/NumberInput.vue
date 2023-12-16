<template>
  <div class="input">
    <label :for="`${name}Input`" class="input__label">
      <span class="input__label--text">{{ label }}</span>
    </label>
    <input
      type="number"
      class="input__control"
      min="1"
      :max="max"
      :name="`${name}Input`"
      :id="`${name}Input`"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>
