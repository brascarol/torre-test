import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Dashboard',
            component: () =>
                import ('./components/Dashboard.vue')
        },
        {
            path: '/bio/:{username}',
            name: 'Bio',
            component: () =>
                import ('./components/Bio.vue')
        },
    ]
});