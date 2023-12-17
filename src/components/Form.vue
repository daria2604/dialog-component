<template>
  <form :class="`form form--${formName}`" @submit.prevent="handleSubmit">
    <p :class="`heading ${headingPosition} form__heading`">{{ heading }}</p>
    <div class="form__row">
      <div class="form__col">
        <div v-for="field in fields" :key="field.name" :class="`form__field`">
          <div
            v-if="field.type === 'text' " 
            class="form__field-block form__field-block--input"
          >
            <Input
              :inputType="field.type"
              :name="field.name"
              :placeholder="field.placeholder"
              :hasComment="field.hasComment"
              :commentText="field.commentText"
            />
          </div>

          <div
            v-else-if="field.type === 'select'"
            class="form__field-block form__field-block--input"
          >
            <Select
              :options="field.options"
              :name="field.name"
              :design="field.design"
              :label="field.label"
              :placeholder="field.placeholder"
            ></Select>
          </div>

          <div
            v-if="field.type === 'number' " 
            class="form__field-block form__field-block--input"
          >
            <Input
              :inputType="field.type"
              :name="field.name"
              :label="field.label"
              :max="field.max"
              :value="field.value"
              @clearInput="clearInput()"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <ul class="buttons__list">
        <li class="buttons__item" v-if="formName === 'create'">
          <button type="button" class="button button--simple form__button" @click="handleCancel">Отмена</button>
        </li>
        <li class="buttons__item">
          <button type="submit" class="button button--covered form__button">Создать</button>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import Select from './Select.vue';
import Input from './Input.vue';

export default {
  name: 'Form',
  components: { Select, Input },
  props: {
    formName: {
      type: String,
    },
    heading: {
      type: String,
    },
    headingPosition: {
      type: String,
    },
    fields: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleCancel() {
      this.$emit('handleCancel');
    },
    handleSubmit() {
      this.$emit('handleSubmit');
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 700px;

  &__col {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
}
</style>
