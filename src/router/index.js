import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index.vue'),
        meta:{
            path: '/',
            title: '首页'
        }
    },
    {
        path: '/dynamic',
        name: 'dynamic',
        component: () => import('@/views/dynamic.vue'),
        meta:{
            path: '/dynamic',
            title: '动态'
        },
        children:[
            {
                path: '',
                component: () => import('@/views/dynamicShow.vue')
            },
            {
                path: 'edit',
                component: () => import('@/views/dynamicEdit.vue'),
                meta:{
                    path: '/dynamic/edit',
                    title: '新建动态'
                }
            },
            {
                path: 'comment',
                component: () => import('@/views/dynamicComment.vue'),
                meta:{
                    path: '/dynamic/comment',
                    title: '评论'
                }
            }
        ]
    },
    {
        path: '/message',
        name: 'message',
        component: () => import('@/views/message.vue'),
        meta:{
            path: '/message',
            title: '留言'
        }
    },
    {
        path: '/versaillestown',
        component: () => import('@/views/versaillesTown.vue'),
        meta:{
            path: '/versaillestown',
            title: '凡尔赛小镇'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),routes
})
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title == undefined ? '博客' : to.meta.title
    document.body.scrollTop = 0
    next()
})
export default router
