import { combineReducers } from 'redux'
import stats from './stats'
import status from './status'
 
const app = combineReducers({
  stats,
  status,
})
 
export default app
