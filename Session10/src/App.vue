<template>
  <ul>
    <learning-resource 
    v-for="res in storedResources" 
    :key="res.id" 
    :title="res.title" 
    :description="res.description"
    :link="res.link">
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learing-resources/LearningResource.vue';

export default {
  components:{
    LearningResource:LearningResource
  },
  data() {
    return {
      storedResources:[
        {id: 'official-guide',
        title: 'Official Guide',
        description: 'The official Vue.js documentation.',
        link: 'https://vuejs.org'
        },
        {id: 'Goggle',
        title: 'Goggle',
        description: 'Learn to google...',
        link: 'https://google.org'
        },
      ]
    };
  }
}
</script>