import Vue from 'vue'; //node_modules 下面的vue
import App from './App.vue';
new Vue({
    el:'#app',
    render:c=>c(App)
    // comments:{
    //     app:App
    // },
    // template:`
    // <app/>
    // `
})