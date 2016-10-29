import { handleActions } from 'redux-actions'
import * as T from './actionTypes'

const popInitState = {
  isOpen: false,
  userName: 'X',
  userId: '',
  flowerCount: 1
}

export const flowerPop = handleActions({
  [T.OPEN_POP]: (state, action) => ({...state, ...action.payload, isOpen: true}),
  [T.CLOSE_POP]: (state, action) => ({...state, isOpen: false, flowerCount: 1}),
  [T.SEND_FLOWER]: (state, action) => {
    // let {count, uid} = action.payload.data
    return {...state, isOpen: false}
  }
}, popInitState)
