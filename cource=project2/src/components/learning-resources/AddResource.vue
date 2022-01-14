<template>
  <base-dailog v-if="inputIsInvalid" title="Invalid input" @close="confirmError">
    <template #default>
      <p> Unfortunately,at least one inout value is invalid</p>
      <p>Please check </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">
        OK
      </base-button>  
    </template>
  </base-dailog>
  <base-card>
    <form @sumit.prevent="submitData">
      <div>
        <label for="title">Title</label>
        <input id="text" name="title" type="text" ref="titleInput"/>
      </div>
      <div class="form-control">
        <label for="title">Description</label>
        <textarea id="description" name="description" rows="3" ref="descInput"> </textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput"/> 
      </div>
      <div>
        <base-button tyoe="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseDailog from '../UI/BaseDailog.vue';
export default {
  components: { BaseDailog },
  inject: ['addResource'],
  data(){
    return{
      inputIsInvalid: false,   
    }
  },
  methods:{
    submitData(){
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescripition = this.$refs.descInput.value;
      const enteredUrl = this.$refs.urlInput.value;   

      if(enteredTitle.trim() === ''|| enteredDescripition.trim() === ''|| enteredUrl.trim() === ''){
        this.inputIsInvalid = false;
       return; 
      }
      this.addResource( enteredTitle,enteredDescripition,enteredUrl );
    },
    confirmError(){
      this.inputIsInvalid = false;
    }
  },
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