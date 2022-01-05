const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '', 
      goals: ['Finish the coursue!'] 
    };
  },
  methods:{
    addGoal(){
      this.goals.push(his.enteredGoalValue);
    }
  }
});

app.mount('#user-goals');
