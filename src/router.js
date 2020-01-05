import Vue from 'vue'
import VueRouter from 'vue-router'
//　ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: Home },
    {path: '/product', component: Product }
  ]
})

export defalut router
