import { createWebHistory, createRouter } from "vue-router";

import PageNotFount from "./components/PageNotFount.vue";
import HomeView from "./components/HomeView.vue";
import ReservaView from "./components/ReservaView.vue";
import LoginView from "./components/LoginView.vue";
import UpdateRestaurantView from "./components/UpdateRestaurantView.vue";

const routes=[
    {
        name:"HomeView",
        component:HomeView,
        path:'/',
    },
    {
        name:"ReservaView",
        component:ReservaView,
        path:'/reserva',
    },
    {
        name:"LoginView",
        component:LoginView,
        path:'/login',
    },
    {
        name:"UpdateRestaurantView",
        component:UpdateRestaurantView,
        path:'/update/:id',
    },
    {
        name:"PageNotFount",
        component:PageNotFount,
        path:'/:pathMatch(.*)*',
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;