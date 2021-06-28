<template>
<div>
    <navbar2 />
    
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
                    <button type="button" class=" btn btn-secondry link active ">
                        <router-link to='/'>Confirm</router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <br><br><br>
<h1>Personal Development</h1>
    <form @submit="submit">
        <div class="container bootstrap snippets bootdeys">
            <div class="row">
                <div class="col-md-4 col-sm-6 content-card">
                    <div class="card-big-shadow">
                        <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                            <div class="content">
                                <h3>Question 1</h3>
                                <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                <div class="form-check">
                                    <input class="form-check-input"  v-model="t1.selected1" type="radio" value="yes" name="flexRadioDefault1" id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" v-model="t1.selected1" type="radio" value="no" name="flexRadioDefault1" id="flexRadioDefault1" >
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div> <!-- end card -->
                    </div>
                </div>

                <div class="col-md-4 col-sm-6 content-card">
                    <div class="card-big-shadow">
                        <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                            <div class="content">
                                <h3>Question 2</h3>
                                <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                              <div class="form-check">
                                    <input class="form-check-input" v-model="t1.selected2" type="radio"  name="flexRadioDefault2" id="flexRadioDefault2">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" v-model="t1.selected2" type="radio"  name="flexRadioDefault2" id="flexRadioDefault2" >
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div> <!-- end card -->
                    </div>
                </div>

                <div class="col-md-4 col-sm-6 content-card">
                    <div class="card-big-shadow">
                        <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                            <div class="content">
                                <h3>Question 3</h3>
                                <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                             <div class="form-check">
                                    <input class="form-check-input" v-model="t1.selected3" type="radio" value="yes" name="flexRadioDefault3" id="flexRadioDefault3">
                                    <label class="form-check-label" for="flexRadioDefault3">
                                    yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" v-model="t1.selected3" type="radio" value="no" name="flexRadioDefault3" id="flexRadioDefault3" >
                                    <label class="form-check-label" for="flexRadioDefault3">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div> <!-- end card -->
                    </div>
                </div>

                <div class="col-md-4 col-sm-6 content-card">
                    <div class="card-big-shadow">
                        <div class="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                            <div class="content">
                                <h3> Question 4</h3>
                                <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                            <div class="form-check">
                                    <input class="form-check-input" v-model="t1.selected4" type="radio" value="yes" name="flexRadioDefault4" id="flexRadioDefault4">
                                    <label class="form-check-label"  for="flexRadioDefault4">
                                    yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" v-model="t1.selected4"  type="radio" value="no" name="flexRadioDefault4" id="flexRadioDefault4" >
                                    <label class="form-check-label"   for="flexRadioDefault4">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div> <!-- end card -->
                    </div>
                </div>

                <div class="col-md-4 col-sm-6 content-card">
                    <div class="card-big-shadow">
                        <div class="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                            <div class="content">
                                <h3 >Question 5</h3>
                                <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                            <div class="form-check">
                                    <input class="form-check-input" v-model="t1.selected5" :aria-describedby="ariaDescribedby" type="radio"  value="yes" name="flexRadioDefault5" id="flexRadioDefault5">
                                    <label class="form-check-label" for="flexRadioDefault5">
                                    yes
                                    </label>
                                </div>
                                
                                <div class="form-check" >
                                    <input class="form-check-input"  v-model="t1.selected5"  type="radio" value="no" name="flexRadioDefault5" id="flexRadioDefault5" >
                                    <label class="form-check-label" for="flexRadioDefault5">
                                        No
                                    </label>
                                </div>
                        </div> <!-- end card -->
                    </div>
                </div>
                </div>
                <div class="col-md-4 col-sm-6 content-card">
                    <div class="card-big-shadow">
                        <div class="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                            <div class="content">
                                <p class="description">Make sure while submit </p>

                                <button class="btn btn-secondary">submit </button>
                            </div>
                        </div> <!-- end card -->
                    </div>
                </div>

            </div>
        </div>

    </form>
</div>
</template>

<script>
import navbar2 from '@/components/navbar2.vue'
export default {
    name: "topic1",

    components: {

        navbar2
    },
    data(){
        return{
            t1:{
     selected1:null,
     selected2:null,
     selected3:null,
     selected4:null,
     selected5:null
        }
        }
    },
    methods:{
    
        submit(e){
             e.preventDefault()
             this.t1
            console.log(this.t1)
        }
    }
}
</script>

<style>

</style>
