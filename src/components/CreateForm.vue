<template>
  <Form
    :formName="'create'"
    :heading="heading"
    :headingPosition="'heading--centered'"
    :fields="fields"
    @handleCancel="closeCreateForm"
    @handleSubmit="createEmployee"
  />
</template>

<script>
import Form from './Form.vue';

export default {
  name: 'CreateForm',
  components: { Form },
  props: {
    closeCreateForm: {
      type: Function,
      required: true,
    },
    createEmployee: {
      type: Function,
      required: true,
    }
  },
  data() {
    return {
      heading: 'Создать сотрудника',
      fields: [
        {
          name: 'employee',
          type: 'select',
          design: 'iconed',
          label: 'Сотрудник',
          options: [
            {
              optionText: 'ААА',
            },
            {
              optionText: 'BBB',
            },
            {
              optionText: 'CCC',
            },
            {
              optionText: 'DDD',
            },
          ],
        },
        {
          name: 'manager',
          type: 'select',
          design: 'iconed',
          label: 'Руководитель',
          options: [
            {
              optionText: 'Иванов Иван Иванович',
            },
            {
              optionText: 'Петров Петр Петрович',
            },
          ],
        },
        {
          name: 'domain',
          type: 'select',
          placeholder: 'Тип ставки',
          options: [
            {
              optionText: 'opex',
            },
            {
              optionText: 'capex',
            },
          ],
        },
        {
          name: 'unit',
          type: 'select',
          placeholder: 'Бизнес единица',
          options: [
            {
              optionText: 'MVM',
            },
            {
              optionText: 'MTech',
            },
          ],
        },
        {
          name: 'percent',
          type: 'number',
          label: 'Процент капитализации',
          value: 0,
        },
        {
          name: 'position',
          type: 'text',
          placeholder: 'Должность',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
