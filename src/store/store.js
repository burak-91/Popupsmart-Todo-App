import {  createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'

const middleWares = [thunk]

middleWares.push(logger)




export const store = createStore(rootReducer,applyMiddleware(...middleWares));