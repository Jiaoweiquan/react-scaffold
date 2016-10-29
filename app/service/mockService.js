import axios from 'axios'

const host = 'localhost'
const port = 3001
const Endpoints = {
  SendFlowerLog: 'sendflowerlog'
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
