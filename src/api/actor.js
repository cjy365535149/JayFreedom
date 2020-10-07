import request from '@/utils/request'

export function getActor(query) {
  return request({
    url: '/api/actor',
    method: 'get',
    params: query
  })
}
export function getAllActor() {
  return request({
    url: '/api/actor/all',
    method: 'get',
  })
}
