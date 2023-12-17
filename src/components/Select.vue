<template>
  <div :class="`select select--${design}`">
    <div class="select__icon" v-if="design === 'iconed'">
      <SvgIcon :name="'profile'" class="select__icon-pic" />
    </div>
    <div class="select__wrap" @click="handleSelectClick">
      <label v-if="design === 'iconed'" :for="name" class="select__label">
        {{ label }}
      </label>

      <div class="select__control" v-if="design === 'iconed'">
          <span class="select__placeholder">{{
            selectedOption ? selectedOption : 'Нет пользователя'
          }}</span>
          <div class="select__options" v-if="areOptionsVisible">
            <span
              class="select__option"
              v-for="(option, index) in options"
              :key="index"
              @click="handleSelectOption(option.optionText)"
            >
              {{ option.optionText }}
            </span>
          </div>
        </div>

      <div class="select__control" v-else-if="design === 'simple'">
        <span class="select__placeholder">{{ selectedOption ? selectedOption : placeholder }}</span>
        <div class="select__options" v-if="areOptionsVisible">
          <span
            class="select__option"
            v-for="(option, index) in options"
            :key="index"
            @click="handleSelectOption(option.optionText)"
          >
            {{ option.optionText }}
          </span>
        </div>
      </div>
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
      default: 'simple',
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
    },
  },
  data() {
    return {
      areOptionsVisible: false,
      selectedOption: '',
    };
  },
  methods: {
    handleSelectClick() {
      this.areOptionsVisible = !this.areOptionsVisible;
    },
   
    handleSelectOption(option) {
      this.selectedOption = option;
      this.areOptionsVisible === false;
    },
    hideOptions() {
      this.areOptionsVisible = !this.areOptionsVisible;
    }
  },
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;

  &--simple & {
    &__control {
      position: relative;

      padding: 12px 8px;

      border: 1px solid $color-rounded-border;
      border-radius: 4px;

      background-image: url('../assets/images/arrow-down.svg');
      background-repeat: no-repeat;
      background-position: center right 8px;
      background-size: 24px;

      &:focus,
      :focus-visible {
        outline-color: rgba($lavender, 1);
      }
    }

    &__options {
      top: 40px;
      left: 0;
      right: 0;

      border: 1px solid $color-rounded-border;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    
  }

  &--iconed {
    display: flex;
    align-items: center;

    padding: 8px 10px;

    border: 1px solid $color-sharp-border;
  }

  &--iconed & {
    &__wrap {
      background-image: url('../assets/images/plus.svg');
      background-repeat: no-repeat;
      background-position: center right 8px;
      background-size: 24px;
    }

    &__control {
      font-size: $fz-input;
    }

    &__options {
      top: 52px;
      left: 0;
      right: 0;

      border: 1px solid $color-sharp-border;
    }
    
    &__icon {
      margin-right: 10px;

      &-pic {
        width: 16px;
        height: 16px;

        color: $color-employee-icon;
      }
    }

    &__label {
      font-size: $fz-label;

      color: $color-label;
    }

    &__wrap {
      width: 100%;
    }
  }

  &__control {
    font-size: $fz-input;

    width: 100%;

    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::placeholder {
      font-size: $fz-input;

      color: $color-placeholder;
    }
  }

  &__options {
      position: absolute;

      display: flex;
      flex-direction: column;

      width: 100%;      
      
      background-color: $white;

      z-index: 20;
    }

    &__option {
      padding: 13px;

      color: $color-text;

      &:hover {
        background-color: $alabaster;
      }
    }

}
</style>
