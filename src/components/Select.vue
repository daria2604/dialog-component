<template>
  <div :class="`select select--${design}`">
    <div class="select__icon" v-if="design === 'iconed'">
      <SvgIcon :name="'profile'" class="select__icon-pic" />
    </div>
    <div class="select__wrap">
      <label 
        v-if="design === 'iconed'" 
        :for="name" 
        class="select__label" 
      >
        {{ label }}
      </label>
      <select 
        :class="`select__control`" 
        :name="name" 
        :id="name"
      >
        <option v-if="design === 'iconed'">Нет пользователя</option>
        <option v-else disabled selected>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.optionText"
          :value="option.optionText"
        >
          {{ option.optionText }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'Select',
  components: {
    SvgIcon,
  },
  props: {
    design: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    }
  },
};
</script>

<style lang="scss" scoped>
.select {
  &__control {
    appearance: none;
  }
}
</style>
