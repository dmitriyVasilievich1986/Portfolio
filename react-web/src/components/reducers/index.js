import mainReducer from './mainReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    properties: mainReducer
})