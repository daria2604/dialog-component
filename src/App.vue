<template>
  <div class="page" id="app">
    <button type="submit" class="button button--covered button--dialog" @click="openDialog">Диалоговое окно</button>
    <DataForm :handleSubmit="handleSubmitData" />
    <Dialog :isModalOpen="isModalOpen">
      <CreateForm
        :closeCreateForm="handleCancel"
        :createEmployee="handleCreateEployee"
      />
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog.vue';
import DataForm from './components/DataForm.vue';
import CreateForm from './components/CreateForm.vue';

export default {
  name: 'App',
  components: { 
    Dialog, 
    DataForm, 
    CreateForm 
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openDialog() {
      this.isModalOpen = true;
    },
    handleCancel() {
      this.isModalOpen = false;
    },
    handleCreateEployee() {
      console.log('The employee has been created.');
    },
    handleSubmitData() {
      console.log('Your data has been submitted.');
    },
  },
};
</script>

<style lang="scss">
.page {
  width: 100%;
  max-width: calc($container-width-desktop + 2 * $gap-container);
  margin: $gap-container auto;
  padding-left: $gap-container;
  padding-right: $gap-container;

}
</style>
