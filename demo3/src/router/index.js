import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/index'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/login',
		name: 'login',
		components: {
			login
		}
	}]
})