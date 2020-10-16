import request from '@/utils/request'

export function login(auth) {
  return request({
    url: '/api/login',
    method: 'post',
    //auth: auth,
    params: auth
  })
}
