<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
  import StoredResources from "./Stored-Resources.vue";
  import AddResource from "./Add-resource.vue";

export default {
  components: {
    StoredResources,
    AddResource
  },
  data(){
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  provide(){
    return {
      resources: this.storedResources
    };
  },
  methods:{
    setSelectedTab(tab){
      this.setSelectedTab = tab;
    }
  }
}
</script>