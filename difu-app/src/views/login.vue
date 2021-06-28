<template>
<div>
    <table v-if="error">

        <tr  type="none">
            <td class="content" v-for="e in error" v-bind:key="e.id">

                <span class="alert alert-danger d-flex align-items-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                    </svg>

                    {{e}}</span>

            </td>
        </tr>

    </table>
    <form @submit="login">
        <table>
            <tr>
                <td>
                    <img src="../assets/logos.png" alt="" style="margin-left:0px;" width="200" height="200">
                </td>
            </tr>
        </table>

        <h1 class="h3 mb-3 fw-normal" style="margin-left:80px;color:#595959">Please sign in</h1>

        <div class="form-floating" style="width:300px;margin-left:8px;">
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="post.email">
            <label for="email">Email address</label>
        </div>
        <br />
        <div class="form-floating" style="width:300px;margin-left:8px;">
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="post.password">
            <label for="password">Password</label>
        </div>
        <br />
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" style="margin-left:40px;" value="remember-me"> Remember me
            </label>
        </div>
        <button class="w-60 btn btn-lg btn-primary" style="margin-left:110px;" type="submit">Sign in</button>

    </form>

</div>
</template>

  
<script>
import * as auth from '../services/AuthService.js'

/* import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'*/
export default {
    name: "login",

    data() {
        return {

            post: {

                email: null,
                password: null,
            },
            error: [],
            loaded: true
        }
    },

    methods: {
        login(e) {
            if (this.post.email && this.post.password) {
                auth.loginn();
                this.$router.push({
                    name: 'home'
                });
                console.log(this.post.email, this.post.password)
            } else {
                this.error = [];
                if (!this.post.email) {
                    this.error.push("  email required")
                }
                if (!this.post.password) {
                    this.error.push("  password required !")
                }
                console.warn(this.error)

            }
            e.preventDefault()

        }
    }
}
</script>

  
<style>
tr,td {
    padding: 10px;
    align-items: center;
}
</style>