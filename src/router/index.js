import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/index.js';
Vue.use(VueRouter);
let router = new VueRouter({
    routes,
    scrollBehavior(to,from,savePosition) {
        return {y:0};
    }
});

export default router;