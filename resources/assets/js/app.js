import Vue from 'vue';
import ImageCarousel from '../components/ImageCarousel.vue';

Vue.component('my-component', { template: '<div>My component!</div>' });



import { populateAmenitiesAndPrices } from './helpers';
let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);



var app = new Vue({
    el: "#app",
    components:{
        'image-carousel':ImageCarousel
    },
    data: Object.assign(model, {
        contracted: true,
        modalOpen: false,
        headerImageStyle: { "background-image": `url(${model.images[0]})` },
        myval: false
    }),

    methods: {
        escapeKeyListener(evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },

    watch: {
        modalOpen: function() {
            var className = "modal-open";
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created: function() {
        document.addEventListener("keyup", this.escapeKeyListener);
    },
    destroyed: function() {
        document.removeEventListener("keyup", this.escapeKeyListener);
    }
},);