import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import HomePage from "../views/HomePage.vue";
import AddVisitor from "../views/AddVisitor.vue";
import AddUser from "../views/AddUser.vue";
import AddOffice from "../views/AddOffice.vue";

const routes = [
  { path: "/", component: Auth },
  { path: "/home", component: HomePage },
  { path: "/visitor", component: AddVisitor },
  { path: "/user",component: AddUser},
  { path: "/office",component: AddOffice}
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
