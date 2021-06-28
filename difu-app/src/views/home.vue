<template>
<div class="customs-bg-dark" >

    <navbar1 />
     <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are You Sure?
      </div>
      <div class="modal-footer">
        <button type="button" class=" btn btn-secondry link active" data-bs-dismiss="modal">Close</button>
        <button type="button" class=" btn btn-secondry link active "><router-link to='/'>Confirm</router-link></button>
      </div>
    </div>
  </div>
</div>
    

 <body class="text-center customs-bg-dark" >
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column customs-bg-dark " >

        
      <h3 class="masthead-brand" style="color:white" id="fade-out">Welcome {{this.$store.state.username}}</h3>
        
    

  <main role="main" class=" cover-container d-flex h-100 w-75 p-3 mx-auto flex-column customs-bg-dark " id="fade-in">
     <!-- <div class="card customs-bg-dark" >-->
    <h1 class="cover-heading" style="color:white">{{this.$store.state.username}}</h1>
    <p class=" lead fst-italic " style="text-align:center;color:white">Asst.role</p>
    <p class="lead" style="color:white" >Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
    <p class="lead" style="color:white">
     <router-link to="/dashboard"  class="btn btn-lg btn-secondary glow-on-hover" style="height:70px"><p style="padding:10px">Take Assesment</p></router-link>
    </p>
     <!-- </div>-->
  </main>

  <footer class="navbar navbar-expand-md navbar-dark fixed-bottom custom-bg-dark">
    <div class="inner">
      <p> .</p>
    </div>
  </footer>
    </div>
  </body>
 </div>
</template>

<script>
import navbar1 from '../components/navbar1.vue'
//import HelloWorld from '../components/HelloWorld.vue'
export default {
    name: "home",
    components: {
        navbar1,
        //HelloWorld
    },
    beforeCreate: function () {
        this.$store.dispatch('authenticate');
    }

}
</script>
