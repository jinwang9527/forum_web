import {getToken,setToken, removeToken} from "../../utils/auth";
import {md5} from '../../utils/common'
import {login} from "../../api/login";


const user={
  state:{
    token:getToken(),
    name:'',
    avatar:'',
    userInfo:null,
  },
  mutations:{
    SET_TOKEN:(state,token)=>{
      state.token=token
    },
    SET_NAME:(state,name)=>{
      state.name=name
    },
    SET_USER_INFO:(state,userInfo)=>{
      state.userInfo=userInfo
    }
  },
  actions:{
    //登录
    Login({commit},userInfo){
      const username=userInfo.username.trim()
      return new Promise((resolve, reject) =>{
        login(username,md5(userInfo.password)).then(response=>{
          const data=response.data
          setToken(data)
          commit('SET_TOKEN',data)
          resolve()
        }).catch(error=>{
          reject(error)
        })
      })
    },

    //登出
    LoginOut({commit , state}){
      return new Promise((resolve,reject)=>{
        commit('SET_TOKEN','')
        removeToken()
        location.reload()
      })
    },
    //前端登出
    FedLogOut({commit}){
      return new Promise(resolve => {
        commit ('SET_TOKEN','')
        removeToken()
        resolve()
      })
    }

  }
}

export default user
