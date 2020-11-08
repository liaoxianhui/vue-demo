import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: () =>
            import ('../views/login.vue'),
        meta: {
            title: '登录',
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/register.vue'),
        meta: {
            title: '注册',
        }
    },
    {
        path: '*',
        name: 'error',
        component: () =>
            import ('../components/error/error'),
        meta: {
            title: 'error',
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, data) => {
    document.title = to.meta.title
})
export default router