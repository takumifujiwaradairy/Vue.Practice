const  app = Vue.createApp({
  data(){
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false
    }
  },
    computed:{
      boxAClasses(){
        return {active: this.boxASelected};
      }
    },  
    methods: {
      boxSelected(box){
        if (box === 'A'){
          this.boxASelected = true; 
      } else if (box === 'B'){
          this.boxBselected = true;
      } else if (box === 'C'){
        this.boxCSelected = true;
      }
    }
  }
});

app.mount('#styling');