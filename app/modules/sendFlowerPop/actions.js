import { createAction } from 'redux-actions'
import * as T from './actionTypes'

export const openPop = createAction(T.OPEN_POP)
export const closePop = createAction(T.CLOSE_POP)

