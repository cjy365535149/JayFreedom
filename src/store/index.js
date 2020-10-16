import Vue from 'vue'
import Vuex from 'vuex'
import { login } from "@/api/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {
      username:null,
      token:null,
      isLogon:false,
    }
  },
  mutations: {
    login(state){
      state.user.isLogon = true;
    },
    logout(state){
      state.user.isLogon = false;
    }
  },
  actions: {

    Login({commit}, user) {
      
      return new Promise((resolve, reject) => {
      // 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
      login(user)
        .then(r => {
        if (r.code === 200) {
          commit('login')
        } else {
          that.$notify.error({
            title: "error",
            message: "登录失败:" + r.data.msg,
            type: "error",
            position: "bottom-right",
          });
          commit('logout')
        }
        resolve(r)
        })
        .catch(err => {
          console.log(err.code);
          if (err.code === 401){
            console.log("登陆失败");
          }
          reject(err)
        })
      })
    },
    LogOut({ commit, state }) {

     }
  
  },
  modules: {
  }
})
