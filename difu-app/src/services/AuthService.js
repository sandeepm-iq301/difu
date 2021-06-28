import store from '../store'
export function isLoggedIn(){
 const token =localStorage.getItem('token');
  return token != null;
}
export function loginn(){
const token ={
    email:'san@gmail.com',
    username:'Sandeep',
    role:'Asst role'
}
 setToken(token);
}
function setToken(token){
    localStorage.setItem('token',JSON.stringify(token));
    store.dispatch('authenticate');
}
export function getemail(){
    return 'san@gmail.com';
}
export function getpassword(){
    return '1';
}
export function getusername(){
    return 'Sandeep';
}
export function getrole(){
    return 'Asst role';
}