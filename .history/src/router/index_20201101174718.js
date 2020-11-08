import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'


Vue.use(VueRouter)

const routes = [{
        path: '',
        name: 'layout',
        component: () =>
            import ('../views/layout/layout'),
        children: [{
                path: '/',
                name: 'index',
                component: () =>
                    import ('../views/index/index'),
                meta: {
                    title: '首页',
                }
            },
            {
                path: '/published',
                name: 'published',
                component: () =>
                    import ('../views/published/published'),
                meta: {
                    title: '已发布',
                }
            },
            {
                path: '/statistics',
                name: 'statistics',
                component: () =>
                    import ('../views/statistics/statistics.vue'),
                meta: {
                    title: '首页',
                }
            },
            {
                path: '/publishArticles',
                name: 'publishArticles',
                component: () =>
                    import ('../views/publishArticles/publishArticles'),
            },
            {
                path: '/tab',
                name: 'tab',
                component: () =>
                    import ('../views/tab/tab'),
            },
            {
                path: '/exportExcel',
                name: 'exportExcel',
                component: () =>
                    import ('../views/exportExcel/exportExcel'),
            },
            {
                path: '/imageUpload',
                name: 'imageUpload',
                component: () =>
                    import ('../views/imageUpload/imageUpload'),
            },
            {
                path: '/exitSystem',
                name: 'exitSystem',
                component: () =>
                    import ('../views/exitSystem/exitSystem'),
            },
        ]
    },
    {
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
            import ('../views/register/register.vue'),
        meta: {
            title: '注册',
        }
    },
    {
        path: '*',
        name: 'error',
        component: () =>
            import ('../views/error/error.vue'),
        meta: {
            title: 'error',
        }
    },
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