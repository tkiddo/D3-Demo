
import Home from '../views/home';
import About from '../views/about';
import Login from '../views/login';

export default [
	{
		path: '/',
		component: Home,
		auth: true
	},
	{
		path: '/404',
		component: About,
		auth: false
	},
	{
		path: '/login',
		component: Login,
		auth: false
	}
];
