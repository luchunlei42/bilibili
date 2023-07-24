import request from '@/utils/request'

export function login(username, password,code) {
  return request({
    url: '/apix/auth/login',
    method: 'post',
    data: {
      username,
      password,
      code
    }
  })
}

export function phoneCode(phone){
  return request({
    url: '/apix/auth/code',
    method: 'post',
    data: {
      phone
    }
  })
}

export function getInfo() {
  return request({
    url: '/apix/auth/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/apix/auth/logout',
    method: 'post'
  })
}

export function fetchList(params) {
  return request({
    url: '/apix/auth/list',
    method: 'get',
    params: params
  })
}

export function createAdmin(data) {
  return request({
    url: '/apix/auth/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/apix/auth/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/apix/auth/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/apix/auth/delete/' + id,
    method: 'post'
  })
}

