import axios from 'axios'

const host = 'localhost'
const port = 3001
const Endpoints = {
  SendFlowerLog: 'sendflowerlog',
  Users: 'users'
}

const service = axios.create({
  withCredentials: true,
  baseURL: `http://${host}:${port}/`
})

export function getAllPosts() {
  return service.get('posts')
}

export function getSendFlowerLog(options) {
  return service.get(Endpoints.SendFlowerLog)
}

export function sendFlowersTo({uid, count}) {
  // return service.post(Endpoints.SendFlowerLog + '/1')
  return new Promise(resolve => {
    setTimeout(() => resolve({data: {uid, count}}), 100)
  })
}

export function getUsers(options) {
  return service.get(Endpoints.Users)
}
