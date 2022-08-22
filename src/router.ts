import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

export const Layout = () => import('@/views/layout.vue');

const routes = [
    {
        path: "/",
        redirect: "layout",
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/views/login.vue'),
    },
    {
        path: "/error",
        name: "error",
        component: () => import('@/views/error.vue'),
    },
    {
        path: "/layout",
        name: "layout",
        component: Layout,
        redirect: "home",
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import('@/views/home.vue'),
            },
            {
                path: "/about",
                name: "about",
                component: () => import('@/views/about.vue'),
            }
        ]
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})