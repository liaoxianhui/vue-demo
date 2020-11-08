import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: login,
        // meta: {
        //     title: '登录',
        // }
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/register.vue'),
        // meta: {
        //     title: '注册',
        // }
    },
    // {
    //     path: '*',
    //     name: 'error',
    //     component: () =>
    //         import ('../components/error/error'),
    //     // meta: {
    //     //     title: 'error',
    //     // }
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title
//     next()
// })

export default router