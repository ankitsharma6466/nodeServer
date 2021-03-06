import { combineReducers } from "redux"
import homeReducer from '../views/home/reducer'
import paymentReducer from '../views/payment/reducer'
import successReducer from '../views/success/reducer'

export const reducers = combineReducers({
  home: homeReducer,
  payment: paymentReducer,
  success: successReducer
});