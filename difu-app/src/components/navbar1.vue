<template>
<header id="app">

    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img src="../assets/logos.png" alt="" id="res" width="40" height="30">diFU</a>

            <ul class="navbar-nav me-200 mb-2 mb-md-0">

                <li class="nav-item">
                    
                <button class="btn btn-danger glows-on-hover " data-bs-toggle="modal" data-bs-target="#exampleModal" aria-current="page">Log Out</button>
               
                </li>
            </ul>

        </div>

    </nav>
    

    <!--<nav class="navbar navbar-expand-sm navbar-dark fixed-top custom-bg-dark">
        <div class="container">
            <div class="col-8">

                    <a class="navbar-brand" style="font-family:Courier;font-size:20px;text-align:center"> <img src="../assets/logo1.png" alt="" id="res"  width="30" height="30">diFU</a>

            </div>

                        <div class="col-4">
                          <div class="justify-content-end">
                            <p class="dropdown">

                                <a class="btn btn-secondary dropdown-toggle" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="black" stroke-linecap="square" stroke-linejoin="square" class="css-4yn8mv">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                </a>
                            </p>
                            </div>
                            <div class="collapse" id="collapseExample">
                                <ul class="list-group">
                                    <li class="list-group-item">An item</li>
                                    <li class="list-group-item">A second item</li>
                                    <li class="list-group-item">A third item</li>
                                    <li class="list-group-item">A fourth item</li>
                                    <li class="list-group-item">
                                        <router-link to="/">
                                            <img height="20" width="20" src="https://img.icons8.com/color/48/000000/shutdown--v1.png" />Log Out
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

               </div>-->

    <!--<ul class="nav justify-content-end">
         <li class="nav-item">
             <router-link to="/home" class="nav-link" style="color:white">
            Home
            </router-link>

          </li>
          <li class="nav-item ">
            <router-link to="/" class="nav-link">
            Login
            </router-link>

          </li>
          <li class="nav-item">
             <router-link to="/login" class="nav-link">
            Logout
            </router-link>
          </li>
          <li class="nav-item">
             <a class="nav-link">
            {{this.$store.state.email ? this.$store.state.email:'user' }}
            </a>
          </li>-->

    <!--<li class="nav-item"  >
                        <router-link to="/">
                       <button type="button" class="btn btn-outline-secondary" style="background-color:#FFF8DC" ><img height="20" width="20" src="https://img.icons8.com/color/48/000000/shutdown--v1.png"/>Log Out</button>
                       </router-link>
                    </li>

        </ul>-->

    <!--</nav>-->
</header>
</template>

<script>
export default {
    name: 'navbar1',
   // data() {
     ////   return {
  //          msg: ''
//};

   // },

  //  methods: {
        /* deletePopup() {  
             this.$swal({  
                   title: "Do you want to delete this record",  
                   text: "This will be record from Database",  
                   type: "warning",  
                   showCancelButton: true,  
                   confirmButtonColor: "#4026e3",  
                   confirmButtonText: "Yes, remove it it!" 

                   }).beforeEnter((to,from,next) =>{
                   if () {  
                           next('/')  
                           }  
                   });*/
  //  }
}
</script>

<style>
.custom-bg-dark {
    background-color: #595959;
}

.bg-color {
    color: white;

}

@media screen and (-webkit-device-pixel-ratio: 5) {

    /* CSS for high-density screens */
    #res {
        margin-left: 60px;
    }
}

@media screen and (-webkit-device-pixel-ratio: 0) {

    /* CSS for low-density screens */
    #res {
        margin-left: 0px;
    }
}
</style>
