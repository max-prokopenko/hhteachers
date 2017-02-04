import { combineReducers } from 'redux'

import userReducer from './userReducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default combineReducers({
	userReducer,
	routing: routerReducer
})