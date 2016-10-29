import { createAction } from 'redux-actions'
import * as T from './actionTypes'
import * as mockService from 'service/mockService'

export const openPop = createAction(T.OPEN_POP)
export const closePop = createAction(T.CLOSE_POP)
export const sendFlower = createAction(T.SEND_FLOWER, options => {
  return mockService.sendFlowersTo(options)
})
