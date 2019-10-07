import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import AppIndex from '@/components/home/Index'

Vue.use(Router)

export default new Router({
  routes: [
  /*  {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    }
  ]/*,
  proxyTable: {
    '/api': {
      //target代表源地址
      target: 'http://localhost:8081',
      changeOrigin: true,  //允许跨域
      pathRewrite: {
        '^/api': ''
      }
    }
  }*/
})
