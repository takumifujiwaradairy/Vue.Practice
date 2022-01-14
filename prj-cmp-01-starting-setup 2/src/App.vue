<template>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from "./components/learning-resources/StoredResources.vue";
export default {
  components:{
    StoredResources
  },
  
  data(){
    return{
      storedResources: [{
        id: 'offical-guide',
        titie:'Official Guide',
        description:'The official Guide',
        link: 'https://vuejs.org'
      },
      {
        id: 'offical-guide',
        titie:'Official Guide',
        description:'The official Guide',
        link: 'https://vuejs.org'
      }]
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>