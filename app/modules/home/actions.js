import { createAction } from 'redux-actions'
import * as T from './actionTypes'
import { getAllPosts as getP } from 'service/mockService'

export const getAllPosts = createAction(T.GET_ALL_POSTS, () => getP())
