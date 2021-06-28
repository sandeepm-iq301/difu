import { createStore } from 'vuex'


import * as auth from './services/AuthService.js'


//VueAxios.use(Router)
export default createStore({
  state: {
        isLoggedIn:false,
      apiUrl:'http://localhost:3000',
      email:null,
      password:null,
      username:null,
      role:null
  },
  mutations: {
    authenticate(state){
  state.isLoggedIn =auth.isLoggedIn();
    if(state.isLoggedIn){
      state.email=auth.getemail();
      state.password=auth.getpassword();
      state.username=auth.getusername();
      state.role=auth.getrole();
    
    }else{
      state.email=null;
      state.password=null;
      state.username=null;
      state.role=null;
    }
  }
  },
  actions: {
    authenticate(context){
      context.commit('authenticate');
    
  }
}
 
})
