import { combineReducers } from 'redux'

import userReducer from './userReducer'
import commentReducer from './commentReducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default combineReducers({
	userReducer,
	commentReducer,
	routing: routerReducer
})