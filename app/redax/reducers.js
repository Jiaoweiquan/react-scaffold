import { combineReducers } from 'redux'
import { reducers as sharedReducers } from 'modules/shared/misc'
import { reducers as homeReducers } from 'modules/home'

export default combineReducers({
  ...sharedReducers,
  ...homeReducers
})
