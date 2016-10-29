import { combineReducers } from 'redux'
import { reducers as sharedReducers } from 'modules/shared/misc'
import { reducers as homeReducers } from 'modules/home'
import { reducers as flowerPopReducers } from 'modules/sendFlowerPop'

export default combineReducers({
  ...sharedReducers,
  ...homeReducers,
  ...flowerPopReducers
})
