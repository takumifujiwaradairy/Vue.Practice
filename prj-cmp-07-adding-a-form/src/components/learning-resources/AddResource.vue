<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input">
    <template #default>
      <p>入力された値は、間違いでした！</p>
      <p>確認して正しいメッセージをお願いします！</p>
    </template>
    <template actions>
      <base-button @click=""></base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @sumit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput"/>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="descInput"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput"/>
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseButton },
  inject: ['addResource'],
  da
    BaseDialogta(){
    return{
      inputIsInvalid: false,
    }
  },
  methods:{
    submitData(){
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescripition = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;  
      
      if(enteredTitle.trim() === '' || enteredDescripition.trim() === '' ||enteredUrl.trim() === ''){
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(enteredTitle,enteredDescripition,enteredUrl);
    },
    confirmError(){
      
    },
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>