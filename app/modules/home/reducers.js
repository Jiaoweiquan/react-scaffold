import { handleActions } from 'redux-actions'
import * as T from './actionTypes'

const initHomeState = {
  posts: []
}

export const home = handleActions({
  [T.GET_ALL_POSTS]: (state, action) => {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload.data)
    })
  }
}, initHomeState)
