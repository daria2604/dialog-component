<template>
  <div :class="`input input--${inputType}`">
    <div class="input__wrap" v-if="inputType === 'text'">
      <input
        type="text"
        class="input__control"
        :name="`${name}Input`"
        :id="`${name}Input`"
        :placeholder="placeholder"
      />
      <span
        :class="`input__comment ${hasComment ? 'input__comment--show' : ''}`"
      >
        {{ commentText }}
      </span>
    </div>

    <div class="input__wrap" v-if="inputType === 'number'">
      <label :for="`${name}Input`" class="input__label">
        <span class="input__label--text">{{ label }}</span>
        <input
          type="number"
          class="input__control"
          min="1"
          :max="max"
          :name="`${name}Input`"
          :id="`${name}Input`"
          :value="value"
        />
      </label>
      <button type="reset" class="button input__button input__button--clear">
        <SvgIcon
          :name="'clear'"
          class="input__button-pic input__button-pic--clear"
        />
      </button>
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'Input',
  props: {
    inputType: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
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
    label: {
      type: String,
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
  components: { SvgIcon },
};
</script>

<style lang="scss">
.input {
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &--text & {
    &__control {
      padding: 12px 8px;

      border: 1px solid $color-rounded-border;
      border-radius: 4px;

      &:focus,
      :focus-visible {
        outline-color: rgba($lavender, 1);
      }

      &::placeholder {
        font-size: $fz-input;

        color: $color-placeholder;
      }
    }
  }

  &--number & {
    &__control {
      border: none;

      &:focus,
      :focus-visible {
        outline: none;
      }
    }

    &__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 8px 10px;

      border: 1px solid $color-rounded-border;
      border-radius: 4px;

      &:focus,
      :focus-visible {
        outline-color: rgba($lavender, 1);
      }
    }
  }

  &__wrap {
    position: relative;
  }

  &__button {
    &-pic {
      &--clear {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__control {
    font-size: $fz-input;

    width: 100%;
  }

  &__comment {
    display: none;
    margin-top: 5px;
    margin-left: 10px;

    color: $color-span;
    font-size: $fz-span;

    &--show {
      display: block;
    }
  }

  &__label {
    font-size: $fz-label;

    color: $color-label;
  }
}
</style>
