import request from '@/utils/request'
import {md5} from '../utils/common'

export function login(account,password) {
  return request({
    url:'user/login',
    method:'post',
    data:{
      account,
      password
    }
  })
}
