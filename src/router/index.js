import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import Create from '../views/Create.vue';
import Tag from '../views/Tag.vue';
import Pic from '../views/Pic.vue';
import Projects from '../components/Projects.vue';

import Blog from '../views/Blog.vue';

import RealTime from '../views/RealTime.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/post/:id',
		name: 'Details',
		component: Details,
		props: true,
	},
	{
		path: '/create',
		name: 'Create',
		component: Create,
	},
	{
		path: '/tags/:tag',
		name: 'Tag',
		component: Tag,
		props: true,
	},
	{
		path: '/pic',
		name: 'Pic',
		component: Pic,
		props: true,
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects,
		props: true,
	},
	{
		path: '/RealTime',
		name: 'RealTime',
		component: RealTime,
	},

	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/blog',
		name: 'Blog',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
