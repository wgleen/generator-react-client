import api from './api'

export const setAccessToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = token
    localStorage.setItem('accessToken', token)
  } else {
    delete api.defaults.headers.common.Authorization
    delete localStorage.accessToken
    delete localStorage.keepLogged
  }
}

export const keepLoggedVerify = () => {
  window.onbeforeunload = () => {
    if (!localStorage.getItem('keepLogged')) return setAccessToken()

    return false
  }
}

export const keepLogged = value => localStorage.setItem('keepLogged', value)
