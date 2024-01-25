import {createRouter, createWebHistory} from 'vue-router';
import {watch} from 'vue';

import HomeView from '@/renderer/views/HomeView.vue';
import MenuView from "@/renderer/views/MenuView.vue";
import LaunchView from "@/renderer/views/LaunchView.vue";

console.log('routeeeer');

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/menu',
		name: 'menu',
		component: MenuView,
	},
	{
		path: '/launch',
		name: 'launch',
		component: LaunchView,
	},
	// {
	//   path: '/courier/:id',
	//   name: 'courier',
	//   component: CourierView,
	// },
	// {
	//   path: '/about',
	//   name: 'about',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	// }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

//TODO Useful for logging
router.afterEach((to, from, failure) => {
	if (failure) {
		console.log('Route Failure:', to, from, failure)
	}
})

//TODO Useful for logging
watch(() => router.currentRoute.value, (to, from) => {
	console.log('Route changed:', to, from);
});


export default router
