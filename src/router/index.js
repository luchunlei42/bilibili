import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import Search from '../components/Search.vue'

// 懒加载 动态加载
const Home = () => import('../components/Home.vue')
const Search = () => import('../components/Search.vue')
const ProtectTheHorse = () => import('../components/protectTheHorse/index.vue')
const ProtectRadish = () => import('../components/protectRadish/index.vue')
const Test = () => import('../components/protectTheHorse/test-time.vue')
const Detail = () => import('../views/detail/index.vue')
const Upload = () => import('../components/Upload.vue')
const Login = () => import('../components/Login.vue')
const Video = () => import("../components/Video.vue")
Vue.use(VueRouter)

// 路由操作 no-referrer 解决跨域问题
const routes = [
  { path: '/', redirect: '/home' },
  {path: '/login', component: Login, hidden: true},
  {
    path: '/home', component: Home, meta: {
      title: "ViliVili",
      name: "referrer",
      content: "no-referrer"
    }
  },
  {
    path: '/search', component: Search, meta: {
      title: "ViliVili--搜素",
      name: "referrer",
      content: "no-referrer"
    }
  },
  {
    path: '/upload', component: Upload, meta: {
      title: "ViliVili--投稿",
      name: "referrer",
      content: "no-referrer",
      requireAuth: true
    }
  },{
    path: '/video/:id', component: Video, meta: {
      title: "ViliVili--播放",
      name: "referrer",
      content: "no-referrer",
    }
  },
  {
    path: '/detail', component: Detail,
  },
  {
    path: '/protectTheHorse', redirect: '/protectTheHorse/0'
  },
  {
    path: '/protectTheHorse/:id', component: ProtectTheHorse, meta: {
      title: "保卫大司马",
      name: "referrer",
      content: "no-referrer"
    }
  },
  {
    path: '/protectRadish', redirect: '/protectRadish/0'
  },
  {
    path: '/protectRadish/:id', component: ProtectRadish, meta: {title: "保卫萝卜4(低配版)"}
  },
  {
    path: '/test', component: Test
  },
]
// vue-router重写push方法，解决相同路径跳转报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  // 这个语句用来解决报错
  // 调用原来的push函数，并捕获异常
  return routerPush.call(this, location).catch(err => err);
}

const router = new VueRouter({
  routes
})




export default router
