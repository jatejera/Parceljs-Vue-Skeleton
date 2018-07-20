import 'babel-polyfill';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/popper.js/dist/umd/popper.js'

import Vue from 'vue';
import App from './App.vue';
import './scss/scss.scss';

new Vue({
    el: '#app',
    render: h => h(App)
})