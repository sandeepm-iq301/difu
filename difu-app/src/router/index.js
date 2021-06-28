import { createRouter, createWebHistory } from 'vue-router'
import home from  '../views/home.vue'
import login from '../views/login.vue'
import dashboard from '../views/dashboard.vue'
import arole2 from '../views/arole2.vue'
import arole3 from '../views/arole3.vue'
import arole4 from '../views/arole4.vue'
import topic1 from '../views/topics/topic1.vue'
import topic2 from '../views/topics/topic2.vue'
import topic3 from '../views/topics/topic3.vue'
import topic4 from '../views/topics/topic4.vue'
import topic5 from '../views/topics/topic5.vue'
import topic6 from '../views/topics/topic6.vue'
import topic7 from '../views/topics/topic7.vue'
const role1=true;
const role2=false;
const role3=false;
const role4=false;

const isLoggedIn =true;
const loginn= false;
const routes = [
  {
   path: '/home',
    name: 'home',
    component: home,
    beforeEnter: (to,from,next) =>{
      if(isLoggedIn){
        
        next();
      }
      else{
        next('/');
      }
      }
    },
    {
      path: '/arole2',
    name: 'arole2',
    component:arole2,
    beforeEnter:(to,from,next)=>{
      if(role2){
        next();
      }
    }

    },
    {
      path: '/arole3',
    name: 'arole3',
    component:arole3,
    beforeEnter:(to,from,next)=>{
      if(role3){
        next();
      }
    }
    },
    {
      path: '/arole4',
    name: 'arole4',
    component:arole4,
    beforeEnter:(to,from,next)=>{
      if(role4){
        next();
      }
    }
    },
   
  { 
    path: '/',
    name: 'login',
    component:login,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
   afterEnter: (to,from,next) =>{
    if(loginn){
      next('/home');
    }
    else{
      next('/');
    }
    }
  },
  {
    path: '/topic1',
     name: 'topic1',
     component: topic1,
    },
    {
      path: '/topic2',
       name: 'topic2',
       component: topic2,
    },
    {
      path: '/topic3',
       name: 'topic3',
       component: topic3,
    },
    {
      path: '/topic4',
       name: 'topic4',
       component: topic4,
    },
    {
      path: '/topic5',
       name: 'topic5',
       component: topic5,
    },
    {
      path: '/topic6',
       name: 'topic6',
       component: topic6,
    },
    {
      path: '/topic7',
       name: 'topic7',
       component: topic7,
    },
     
  {
    path: '/dashboard',
    name:'dashboard',
    component:dashboard,
    beforeEnter: (to,from,next) =>{
      if(role1){
        next();
       
      }
      else if(role2){
        next('/arole2');
      }
      else if(role3){
        next('/arole3');
      }
      else if(role4){
        next('/role4');
      }
      }
    
   
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
})
///routes.beforeEach((to,from,next)=>{


//});
export default router;
