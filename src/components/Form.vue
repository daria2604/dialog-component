<template>
  <form :class="`form form--${formName}`" @submit.prevent="handleSubmit">
    <p class="heading form__heading">{{ heading }}</p>
    <div class="form__row">
      <div class="form__col">
        <div v-for="field in fields" :key="field.name" :class="`form__field`">
          <div
            v-if="field.type === 'text'"
            class="form__field-block form__field-block--input"
          >
            <TextInput
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
            v-else-if="field.type === 'number'"
            class="form__field-block form__field-block--input"
          >
            <NumberInput
              :name="field.name"
              :label="field.label"
              :max="field.max"
              :value="field.value"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <ul class="buttons__list">
        <li class="buttons__item" v-if="formName === 'create'">
          <button type="button" @click="handleCancel">Отмена</button>
        </li>
        <li class="buttons__item">
          <button type="submit">Создать</button>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import NumberInput from './NumberInput.vue';
import Select from './Select.vue';
import TextInput from './TextInput.vue';

export default {
  name: 'Form',
  components: { TextInput, Select, NumberInput },
  props: {
    formName: {
      type: String,
    },
    heading: {
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

<style lang="scss" scoped></style>
