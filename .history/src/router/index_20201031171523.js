import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: () =>
            import ('../views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/register.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../components/register/register')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router