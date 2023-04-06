import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
// import dotenv from 'dotenv'
// dotenv.config()

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "https://snt-electronics.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:3093/";
// axios.defaults.baseURL = process.env.API_URL;

// axios.defaults.baseURL = process.env.API_HOSTNAME;

// axios.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       store.dispatch("LogOut");
//       return router.push("/login");
//     }
//   }
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
