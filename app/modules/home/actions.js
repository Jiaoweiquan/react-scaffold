import { createAction } from 'redux-actions'
import * as T from './actionTypes'
import * as mockService from 'service/mockService'

// export const getAllPosts = createAction(T.GET_ALL_POSTS,
//   options => ({
//     allPosts: getP(),
//     againPost: getP(),
//     depend: (allPosts, againPost) => ({kk: 'vv', allPosts, againPost})
//   }),
//   options => ({
//     showLoading: true,
//     dispatchPending: true,
//     success: 'getPostOk',
//     error: 'getPostError'
//   })
// )

export const getAllPosts = createAction(T.GET_ALL_POSTS,
  () => mockService.getAllPosts()
)

export const getSendFlowerLog = createAction(T.SEND_FLOWER_LOG,
  options => ({
    flowerLog: mockService.getSendFlowerLog()
  }),
  options => ({
    dispatchPending: true
  })
)
