import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/index.js';
Vue.use(VueRouter);
let router = new VueRouter({
    routes
});
export default router;