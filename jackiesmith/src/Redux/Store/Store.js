import { legacy_createStore, applyMiddleware } from 'redux'
import { Reducer } from '../Reducer/Reducer';
import logger from "redux-logger"




const Store = legacy_createStore(Reducer, applyMiddleware(logger));
export default Store;