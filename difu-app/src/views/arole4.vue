<template>
<div>
  <navbar2 />
  <h1>Instructions</h1>
  <router-link to="topic1" class="btn btn-primary">accept</router-link>
</div>
</template>

<script>
import navbar2 from '@/components/navbar2.vue'
//import topic1 from '../views/topics/topic1.vue'
export default {
    name: "arole2",

    components: {

       navbar2,
       //topic1
        //HelloWorld

    },
   /* data(){
      return{
        a:null,
        b:null,
        c:null,
        d:null,
        e:null,
        f:null,
        g:null
      }
    },*/
    method:{
      //t1(){
     //  this.a=true;
     // },
      //t2(){
       // this.b=true;
      //}
    },

    beforeCreate: function () {
        this.$store.dispatch('authenticate');
    }
}
</script>
