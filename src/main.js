import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.less'// 引入初始化样式
import ElementUi from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css'// 引入样式

Vue.config.productionTip = false
Vue.use(ElementUi) // 全局注册
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
