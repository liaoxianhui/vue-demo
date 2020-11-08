import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: login,
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
        path: '/',
        name: 'index',
        component: () =>
            import ('../components/index/index'),
    },
    {
        path: '/published',
        name: 'published',
        component: () =>
            import ('../components/published/published'),
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: () =>
            import ('../components/statistics/statistics.vue'),
    },
    {
        path: '/publishArticles',
        name: 'publishArticles',
        component: () =>
            import ('../components/publishArticles/publishArticles'),
    },
    {
        path: '/tab',
        name: 'tab',
        component: () =>
            import ('../components/tab/tab')
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

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    let user = sessionStorage.getItem('user')
    if (to.path === '/login' || to.path === '/register') {
        next()
    } else {
        user ? next() : (next('login') || next('/register'))
    }
})

export default router