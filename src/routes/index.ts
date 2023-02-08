import { RouteRecordRaw } from "vue-router"

import Contact from "@/components/Contact.vue"
import AboutUs from "@/components/AboutUs.vue"
import Services from "@/components/Services.vue"
import Home from "@/components/Home.vue"
import Settings from "@/components/Settings.vue"
import Navigation from "@/components/Navigation.vue"
import Users from "@/components/Users.vue"
import UserDetail from "@/components/UserDetail.vue"
import Info from "@/components/Info.vue"
import UserInfo from "@/components/user/UserInfo.vue"
import UserScores from "@/components/user/UserScores.vue"
import UserCourses from "@/components/user/UserCourses.vue"
import UserHome from "@/components/user/UserHome.vue"

const tienePermiso = (): boolean => Math.random() > 0.5

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Home,
        name: "Home"
    },
    {
        path: "/home",
        redirect: "/"
    },
    {
        path: "/contactus",
        // component: () => import("@/components/Contact.vue"),
        component: Contact,
        name: "Contacto"
    },
    {
        path: "/services",
        // component: () => import("@/components/Services.vue"),
        component: Services,
        name: "Servicios"
    },
    {
        path: "/about",
        // component: () => import("@/components/AboutUs.vue"),
        component: AboutUs,
        name: "About"
    },
    {
        path: "/settings",
        component: Settings,
        name: "Ajustes"
    },
    {
        path: "/navigation",
        component: Navigation,
        name: "Navegacion"
    },
    {
        path: "/users",
        component: Users,
        name: "Usuarios"
    },
    {
        path: "/users/:userId",
        component: UserDetail,
        children: [
            // {
            //     path: "",
            //     component: UserHome
            // },
            {
                path: "info",
                component: UserInfo
            },
            {
                path: "scores",
                component: UserScores
            },
            {
                path: "courses",
                component: UserCourses
            }
        ]
    },
    {
        path: "/info",
        component: Info,
        name: "Info",
        beforeEnter: (to, from, next) => {
            if (tienePermiso()) {
                console.log("Tiene permiso")
                next()
            }
            next("/services")
        }
    }
]

export default routes