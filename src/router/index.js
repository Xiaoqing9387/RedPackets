import Vue from 'vue'
import Router from 'vue-router'
const homePage = r => require.ensure([], () => r(require('@/views/homePage')), 'homePage')
const leaveMsg = r => require.ensure([], () => r(require('@/views/leaveMsg')), 'leaveMsg')
const recorder = r => require.ensure([], () => r(require('@/views/recorder')), 'recorder')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'homePage',
        component: homePage
    }, {
        path: '/leaveMsg',
        name: 'leaveMsg',
        component: leaveMsg
    }, {
        path: '/recorder',
        name: 'recorder',
        component: recorder
    }]
})