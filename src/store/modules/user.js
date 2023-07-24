import { login, logout, getInfo } from '@/lib/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
    state: {
      token: getToken(),
      name: '',
      avatar: ''
    },
  
    mutations: {
      SET_TOKEN: (state, token) => {
        state.token = token
      },
      SET_NAME: (state, name) => {
        state.name = name
      },
      SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
      }
    },
  
    actions: {
      // 登录
      Login({ commit }, userInfo) {
        const username = userInfo.username.trim()
        const code = userInfo.code.trim()
        console.log(code)
        return new Promise((resolve, reject) => {
          login(username, userInfo.password,code).then(response => {
            console.log(response)
            const data = response.data
            const tokenStr = data.tokenHead+data.token
            setToken(tokenStr)
            commit('SET_TOKEN', tokenStr)
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
  
      // 获取用户信息
      GetInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
          getInfo().then(response => {
            const data = response.data
            commit('SET_NAME', data.nickName)
            commit('SET_AVATAR', data.avatar)
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      },
  
      // 登出
      LogOut({ commit, state }) {
        return new Promise((resolve, reject) => {
          logout(state.token).then(() => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
  
      // 前端 登出
      FedLogOut({ commit }) {
        return new Promise(resolve => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        })
      }
    }
  }
  
  export default user