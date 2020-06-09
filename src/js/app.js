import Vue from 'vue'

// Vue.component('navbar', require('./components/Navbar').default);

let vm = new Vue({
    el: '#app',
    data() {
        return {
            show: false,
            mobileIsOpen: false
        };
    }
})