import request from '@/utils/request'

export function getActor(query) {
  return request({
    url: '/api/actor',
    method: 'get',
    params: query,
    //jay 临时验证basic auth
    //auth: {
    //  username: 'jay',
    //  password: 'jay'
    //}
  })
}

export function getAllActor() {
  return request({
    url: '/api/actor/all',
    method: 'get',
    //jay 临时验证basic auth
    //auth: {
    //  username: 'jay',
    //  password: 'jay'
    //}
  })
}
