import Vue from "vue"
import VueRouter from "vue-router"
import localCache from "@/utils/cache"
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/main"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/login.vue")
    },
    {
        path: "/main",
        name: "main",
        component: () => import("@/views/main/main.vue")
    },
    {
        path: "*",
        name: "notFound",
        component: () => import("@/views/notFound/notFound.vue")
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

// 导航守卫
router.beforeEach((to, from, next) => {
    if (to.path !== "/login") {
        const token = localCache.getCache("token")
        if (!token) {
            router.replace("/login")
        }
    }
    next()
})

export default router
