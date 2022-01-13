<template>
aaaadd
  <ul v-for="res in storedResources" :key="res.id" :title="res.title" :link="res.link">
    <resource-item>
    </resource-item>
  </ul>
</template>

<script>
import ResourceItem from './components/ResourceItem.vue';
export default {
  components:{
    ResourceItem
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