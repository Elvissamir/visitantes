import {createRouter, createWebHistory} from "vue-router";
import Auth from "../views/Auth.vue";
import HomePage from "../views/HomePage.vue";


const routes = [

    {path: '/login', name: 'Login', component: Auth},
    {path: '/home', name: 'Home', component: HomePage}

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
    ,
    linkActiveClass: 'active'
});

export default router;
