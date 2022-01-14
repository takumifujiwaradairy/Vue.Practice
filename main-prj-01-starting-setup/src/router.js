import { createRouter,createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistation from './pages/coaches/CoachRegistation.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/coaches'},
    { path: '/coaches', component: CoachesList},
    { path: '/coaches/:id', component: CoachDetail,children:[
     {path: 'contact',component: ContactCoach}, 
    ]},
     { path: '/register', component: CoachRegistation},
     { path: '/requests', component: RequestsReceived},
  ],
});

export default router;
 