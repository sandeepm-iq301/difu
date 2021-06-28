<template>

  <div >
    
     <meta charset="utf-8" name="viewport" 
        content= "width=device-width, initial-scale=1.0">
   
    <HelloWorld style="background-color:#967e7e;"/>
   

    
    
      
 <router-view/>
  </div>
  
  
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'



export default {
name:'app',
components:{
  HelloWorld
}



}
</script>
<style>
table,th,td{
  
  padding:22px;
}
</style>