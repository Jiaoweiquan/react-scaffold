import { handleActions } from 'redux-actions'
import * as T from './actionTypes'

const initHomeState = {
  posts: [],
  flowerLog: [],
  users: []
}

export const home = handleActions({
  [T.GET_ALL_POSTS]: (state, action) => {
    if (action.error) {
      return state
    }
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload.data)
    })
  },
  [T.SEND_FLOWER_LOG]: (state, action) => {
    if (action.error) {
      return state
    }
    let { flowerLog, users } = action.payload
    return Object.assign({}, state, {
      flowerLog: state.flowerLog.concat(flowerLog.data),
      users: state.users.concat(users.data)
    })
  }
}, initHomeState)
