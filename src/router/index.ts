import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../views/Home.vue';
import Foods from '../views/Foods.vue';
import FoodDetail from '../views/Food-Detail.vue';
import AddMenu from '../views/Add-Menu.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/food-detail',
    name: 'Food-Detail',
    component: FoodDetail,
  },
  {
    path: '/add-menu',
    name: 'Add-Menu',
    component: AddMenu,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
