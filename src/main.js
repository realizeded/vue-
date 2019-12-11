import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
Vue.productionTip = false;
Vue.prototype.$axios = axios;
//------------------------------vue-awsome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
//------------------------------vue-awsome-swiper
import './common/less/index.less';
new Vue({
    render:c=>c(App),
    router,
    store
}).$mount('#app');