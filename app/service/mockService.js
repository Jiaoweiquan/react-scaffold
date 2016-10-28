import axios from 'axios'

const host = 'localhost'
const port = 3001

const service = axios.create({
  withCredentials: true,
  baseURL: `http://${host}:${port}/`
})

export function getAllPosts() {
  return service.get('posts')
}
