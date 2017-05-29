import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import sample from './sample'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const AppReducers = combineReducers({
  sample,
})

const storeData = {}

// create store with middleware
export const AppStore = createStore(
	AppReducers,
  storeData,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)
