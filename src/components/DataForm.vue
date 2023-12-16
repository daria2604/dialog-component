<template>
  <Form 
    :formName="'data'" 
    :heading="heading" 
    :fields="fields" 
    @handleSubmit="handleSubmit"
  />
</template>

<script>
import Form from './Form.vue';

export default {
  name: 'DataForm',
  components: { Form },
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      heading: 'Данные',
      fields: [
        {
          name: 'manager',
          type: 'select',
          design: 'iconed',
          label: 'Менеджер',
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
          name: 'product',
          type: 'text',
          placeholder: 'Название продукта',
          name: 'productName',
        },
        {
          name: 'jiraLink',
          type: 'text',
          placeholder: 'Ссылка в Jira',
          hasComment: true,
          commentText: 'Ссылка в Jira, включая https://',
        },
        {
          name: 'domain',
          type: 'select',
          placeholder: 'Домен',
          options: [
            {
              optionText: 'Бэк-офис',
            },
            {
              optionText: 'Техплатформа',
            },
            {
              optionText: 'Офис больших данных',
            },
            {
              optionText: 'Цифровой опыт поставщика',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
